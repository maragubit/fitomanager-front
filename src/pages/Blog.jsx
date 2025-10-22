import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { getCategories, getPost } from "../features/blog/Apis";
import InfiniteScroll from "react-infinite-scroll-component";
import Cargando from "../components/Cargando";
import { Link } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [postCategory, setPostCategory] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 🟩 Cargar posts (solo cuando cambia searchTerm)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await getPost(searchTerm);
                setPosts(response.data.results);
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setError(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [searchTerm]);

    // 🟩 Cargar categorías solo una vez
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                setCategories(response.data.results);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);

    // 🟩 Filtrar posts al cambiar la categoría
    useEffect(() => {
        if (postCategory === 0) {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter(post => post.categories.some(cat => cat.id === postCategory)));
        }
    }, [postCategory, posts]);

    // 🟩 Cargar más posts (infinite scroll)
    const fetchMorePosts = async () => {
        if (!next) return;
        try {
            const response = await getPost(searchTerm, next);
            setPosts(prev => [...prev, ...response.data.results]);
            setNext(response.data.next);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Container>
                <h3 className="text-center manuscrito mb-3">Blog</h3>
            </Container>

            <Form.Control
                type="search"
                placeholder="Buscar artículo"
                className="mt-4 mb-4 justify-content-center mx-auto"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Nav>
                <Nav.Item>
                    <Nav.Link
                        active={postCategory === 0}
                        onClick={() => setPostCategory(0)}
                    >
                        Todas
                    </Nav.Link>
                </Nav.Item>

                {categories.map((category) => (
                    <Nav.Item key={category.id}>
                        <Nav.Link
                            active={postCategory === category.id}
                            onClick={() => setPostCategory(category.id)}
                        >
                            {category.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>

            <Container>
                {loading ? (
                    <Cargando />
                ) : (
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchMorePosts}
                        hasMore={!!next}
                        loader={<Cargando />}
                    >
                        <Row className="g-3 mt-5 mb-4">
                            {filteredPosts.map((post) => (
                                <Col lg={3} xs={12} key={post.id}>
                                    <Link to={`/blog/entrada/${post.id}`}>
                                        <Card className="text-center border-0 mb-5 planta-card">
                                            <Card.Text>{post.title}</Card.Text>
                                            <Card.Img
                                                src={post.image}
                                                alt={post.title}
                                                style={{ objectFit: "cover", height: "200px" }}
                                            />
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </InfiniteScroll>
                )}
            </Container>
        </>
    );
}

export default Blog;