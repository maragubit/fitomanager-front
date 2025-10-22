import axios from "axios";

const domain = process.env.REACT_APP_API_URL

export const getPlantas = async (search="", url=`${domain}/plantas/?search=${search}`) => {
    return axios.get(url);
}

export const getPlanta = async (id) => {
    return axios.get(`${domain}/plantas/${id}/`);
}

export const getPlantasTotal = async () => {
    return axios.get(`${domain}/plantas/plantasTotal/`);
}