import axiosInstance from "../axios/axios"

//signup

export const userSignup = async (value: any) => {
    return await axiosInstance('JwtToken').post("/owner/signup", { ...value });
}