import CardSlice from "../components/createSlice/CardSlice";
import OwnerLogin from "../components/createSlice/OwnerLogin";
import SignupSlice from "../components/createSlice/OwnerSignup";
import { configureStore } from "@reduxjs/toolkit";
import plotSlice from "../components/createSlice/plotSlice";
import ParkingTime from "../components/createSlice/ParkingTime";
// import { uploadimage } from "../components/createSlice/uploadImage";

const store = configureStore({
    reducer:{
        card:CardSlice,
        signup:SignupSlice,
        login:OwnerLogin,
        plots:plotSlice,
        parkingTime:ParkingTime
        // image:uploadimage
    }
})
export default store
