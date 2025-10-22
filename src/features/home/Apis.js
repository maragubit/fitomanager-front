import axios from 'axios'
const domain = process.env.REACT_APP_API_URL || 'https://fitomanager.pythonanywhere.com/api'

export const getPlantasHome = async() => {return await axios.get(`${domain}/plantas/plantasHome`)}

export const getProductosHome = async() => {return await axios.get(`${domain}/productos/productoHome/`)}

export const getPatologiasHome = async() => {return await axios.get(`${domain}/indicaciones/indicaciones/indicacionesHome`)}