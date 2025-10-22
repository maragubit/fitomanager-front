import axios from "axios";

const domain = process.env.REACT_APP_API_URL

export const getPatologias = async (search="", url=`${domain}/indicaciones/indicaciones/?search=${search}`) => {
    return axios.get(url);
}

export const getDepartamentos = async () => {
    return axios.get(`${domain}/indicaciones/departamentos/`);
}

export const getPatologiaById = async (id) => {
    return axios.get(`${domain}/indicaciones/indicaciones/${id}/`);
}