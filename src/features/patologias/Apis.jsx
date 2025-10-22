import axios from "axios";

// Fallback to a safe default so builds don't fail when REACT_APP_API_URL is not set
const domain = process.env.REACT_APP_API_URL || 'https://fitomanager.pythonanywhere.com/api'

export const getPatologias = async (search="", url=`${domain}/indicaciones/indicaciones/?search=${search}`) => {
    return axios.get(url);
}

export const getDepartamentos = async () => {
    return axios.get(`${domain}/indicaciones/departamentos/`);
}

export const getPatologiaById = async (id) => {
    return axios.get(`${domain}/indicaciones/indicaciones/${id}/`);
}