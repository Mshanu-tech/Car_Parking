import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startingTime:"",
    startingDate:"",
    endingTime:"",
    endingDate:""
}

const ParkingTime = createSlice({
    name:"time",
    initialState,
    reducers:{
        ADD:(state, action)=>{
            console.log(action.payload);
            
            state.startingTime = action.payload.startingTime
            state.startingDate = action.payload.startingDate
            state.endingTime = action.payload.endingTime
            state.endingDate = action.payload.endingDate
        },
        UPDATE: (state, action) => {
            // Update the state with the new time and date values
            state.startingTime = action.payload.startingTime;
            state.startingDate = action.payload.startingDate;
            state.endingTime = action.payload.endingTime;
            state.endingDate = action.payload.endingDate;
          },
    }
})

export default ParkingTime.reducer
export const {ADD,UPDATE} =ParkingTime.actions