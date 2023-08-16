import axiosInstance from "../axios/axios"

export const Plots = async ()=>{
    return await axiosInstance('JwtToken').get("/place")
}