import axios from "axios";
import { API_BASE_URL, BASE_URL } from "../../config/urls";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

axiosInstance.interceptors.response.use((res) => {
    return res?.data || res;
}, (err) => {
    return Promise.reject(err);
});

export default axiosInstance;