import axios from "axios";

// Get the base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosRequest = axios.create();
export const axiosResponse = axios.create();
