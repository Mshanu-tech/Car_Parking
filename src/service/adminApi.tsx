import axiosInstance from "../axios/axios"


export const postadmin = async (value: any) =>{
    return await axiosInstance('JwtToken').post("/admin/signup", {...value});
}
export const users = async () =>{
    return await axiosInstance('JwtToken').get("/admin/users");
}
export const Plots = async () => {
    return await axiosInstance('JwtToken').get("/admin/plots")    
}
export const owners = async () => {
    return await axiosInstance('JwtToken').get("/admin/owners")    
}
export const getowner = async (id:string) => {
    return await axiosInstance('JwtToken').get(`/admin/owner/${id}`)    
}
export const getPlot = async (id:string) => {
    return await axiosInstance('JwtToken').get(`/admin/plot/${id}`);
}
export const editPlot = async (value: any) => {
    return await axiosInstance('JwtToken').put("/admin/plot", {...value})
}
export const deletePlot = async (id:string) => {
    return await axiosInstance('JwtToken').delete(`/admin/plot/${id}`);
}
