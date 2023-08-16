import { createSlice } from "@reduxjs/toolkit";

const initialState={
    plots:[]
}

const plotSlice = createSlice({
    name:"plots",
    initialState,
    reducers:{
        ADD:(state, action)=>{
            state.plots = action.payload
        }
    }
})

export default plotSlice.reducer
export const{ADD}=plotSlice.actions