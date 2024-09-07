import axios from "axios"


const urlAll = "https://studies.cs.helsinki.fi/restcountries/api/all"
const urlCountry = "https://studies.cs.helsinki.fi/restcountries/api/name"



const getAll = () => {

    const request = axios.get(urlAll)

    return request.then((response) => response.data)
}

const get = (name) => {
    
    const request = axios.get(`${urlCountry}/${name}`)

    return request.then((response) => response.data)
}

export default {getAll,get}