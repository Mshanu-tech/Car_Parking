import axios from 'axios';

const axiosInstance = (tokenName: any) => {
    // console.log("hdasiudhauidhs", import.meta.env.VITE_SERVER_URL);

    const instance = axios.create({
        baseURL: "http://127.0.0.1:5000",
        timeout: 5000,  
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    // instance request interceptor 
    instance.interceptors.request.use((request) => {
        const token = localStorage.getItem(tokenName)
        request.headers.Authorization = `Bearer ${token}`
        return request
    })

    // instance response interceptor 
    instance.interceptors.response.use(response => response,
        error => Promise.reject(error.response.data)
    )

    return instance;
}

export default axiosInstance;


