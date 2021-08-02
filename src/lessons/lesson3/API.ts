import axios from 'axios';

const key = '?apikey=54330e58';
const configOMB = {
    baseURL: `http://www.omdbapi.com/`,
};
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query).then(res=>res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        const filmType = `${key}&s=${title}&type=${type}`
        return axiosInstance.get(filmType).then(res=>res.data)
    }
};
          

export default API;
