import axios from "axios";

const domain = process.env.REACT_APP_API_URL || 'https://fitomanager.pythonanywhere.com/api'

export const getPost = async (search="", url=`${domain}/blog/post/?search=${search}`) => {
    return axios.get(url);
}

export const getPostDetail = async (id) => {
    return axios.get(`${domain}/blog/post/${id}/`);
}

export const getCategories = async () => {
    return axios.get(`${domain}/blog/categories/`);
}