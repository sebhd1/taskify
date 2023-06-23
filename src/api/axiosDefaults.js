import axios from "axios";

// unique URL for deployed API project on Heroku
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// data format by API
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// CORS errors avoidance when sending cookies
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();