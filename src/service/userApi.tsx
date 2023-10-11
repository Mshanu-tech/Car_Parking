import axiosInstance from "../axios/axios"

export const Plots = async ()=>{
    return await axiosInstance('JwtToken').get("/place")
}
export const CarDetails = async (value: any) =>{
    return await axiosInstance('JwtToken').post("/carDetails", {...value});
}