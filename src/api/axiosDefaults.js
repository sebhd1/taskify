import axios from "axios";

// unique URL for deployed API project on Heroku
axios.defaults.baseURL = 'https://taskify-api-c1fb8f20846a.herokuapp.com/'
// data format by API
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// CORS errors avoidance when sending cookies
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();