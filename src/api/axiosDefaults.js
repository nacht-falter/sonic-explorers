import axios from "axios";

axios.defaults.baseURL = "https://sonic-explorers-api-4c187c4cd99f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosRequest = axios.create();
export const axiosResponse = axios.create();
