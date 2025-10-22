import axios from "axios";

const domain = process.env.REACT_APP_API_URL

export const getProductos = async (search="", url=`${domain}/productos/?search=${search}`) => {
    return axios.get(url);
}

export const getProducto = async (id) => {
    return axios.get(`${domain}/productos/${id}/`);
}


