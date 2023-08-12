import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    name:"",
    email:"",
    phone:0,
    password:""
 }

const signupSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        ADD:(state, action)=>{
            state.name = action.payload
        }
    }
})

export default signupSlice.reducer
export const {ADD} = signupSlice.actions