import axiosInstance from "../axios/axios"


export const postadmin = async (value: any) =>{
    return await axiosInstance('JwtToken').post("/admin/signup", {...value});
}
export const users = async () =>{
    return await axiosInstance('JwtToken').get("/admin/user");
}
export const Plots = async () => {
    return await axiosInstance('JwtToken').get("/admin/plot")    
}
export const owners = async () => {
    return await axiosInstance('JwtToken').get("/admin/owner")    
}
