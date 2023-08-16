import CardSlice from "../components/createSlice/CardSlice";
import OwnerLogin from "../components/createSlice/OwnerLogin";
import SignupSlice from "../components/createSlice/OwnerSignup";
import { configureStore } from "@reduxjs/toolkit";
import plotSlice from "../components/createSlice/plotSlice";

const store = configureStore({
    reducer:{
        card:CardSlice,
        signup:SignupSlice,
        login:OwnerLogin,
        plots:plotSlice,
    }
})
export default store
