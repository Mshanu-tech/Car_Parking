import { createSlice } from "@reduxjs/toolkit";

const initialState={
    plotName:"",
    hour:0,
    day:0,
    month:0,
    plotDetails:"",
    location:""
}

const plotSlice = createSlice({
    name:"plots",
    initialState,
    reducers:{
        ADD:(state, action)=>{
            state.plotName = action.payload
            state.hour = action.payload
            state.day = action.payload
            state.location = action.payload
        }
    }
})