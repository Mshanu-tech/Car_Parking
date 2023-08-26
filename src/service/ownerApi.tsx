import axiosInstance from "../axios/axios"

//signup

export const ownerSignup = async (value: any) => {
    return await axiosInstance('JwtToken').post("/owner/signup", { ...value });
}
export const ownerLogin = async (value: any) =>{
    return await axiosInstance('JwtToken').post("/owner/login", {...value});
}
export const plotForm = async (value: any) => {
    return await axiosInstance('JwtToken').post("/owner/plots", {...value});
}
export const getPlots = async () => {
    return await axiosInstance('JwtToken').get("/owner/plots")    
}
export const getPlot = async (id:string) => {
    return await axiosInstance('JwtToken').get(`/owner/plot/${id}`);
}
export const editPlot = async (value: any) => {
    return await axiosInstance('JwtToken').put("/owner/plot", {...value})
}
export const deletePlot = async (id:string) => {
    return await axiosInstance('JwtToken').delete(`/owner/plot/${id}`);
}