import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../features/blog/Apis";
import Cargando from "../components/Cargando";
function Post(){
    const { id } = useParams();
    const[post,setPost]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    const[date,setDate]=useState(null);

    useEffect(()=>{
        const fetchPostDetail = async () => {
            try {
                const response = await getPostDetail(id);
                setPost(response.data);
                setLoading(false);
                setDate(new Date(response.data.created));
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }}
        fetchPostDetail();
    },[])

    if(loading) return <Cargando/>
    if(error) return <h1>Error: {error}</h1>
    return (<>
    <h3 className="text-center manuscrito mb-5">{post.title}</h3>
        <img style={{maxHeight:"600px", width:"100%", objectFit:"cover"}} className="mx-auto justify-content-center mb-2" src={post.image} alt={post.title}/>
        <div className="text-muted justify-content-end text-end me-5"><p>{post.author.username} {date.toLocaleDateString()}</p></div>
    <p className="mt-5 contenido-html" dangerouslySetInnerHTML={{ __html: post.content }} />
    </>)
}
export default Post;