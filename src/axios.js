import axios from "axios";

export const makeRequest = axios.create({
    baseURL : "https://cinetracker.herokuapp.com/api",
    withCredentials:true,

})