import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:"",
    email:"",
    phone:0,
    carno:0,
    id:0,
    image:""
}

const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers:{
        ADD:(state, action)=>{
            // console.log(action.payload);
            
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.carno = action.payload.carNo
            state.id = action.payload.id
            state.image = action.payload.uniqueImageName
        }
    }
})

export default cardSlice.reducer
export const {ADD} =cardSlice.actions