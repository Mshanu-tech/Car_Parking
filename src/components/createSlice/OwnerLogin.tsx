import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    phone:0
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        OwnerData:(state, action)=>{
            state.name = action.payload.name,
            state.email = action.payload.email,
            state.phone = action.payload.phone
            console.log(action.payload);
            
        }
    }
})

export default loginSlice.reducer
export const{OwnerData}=loginSlice.actions

