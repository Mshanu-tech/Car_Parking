// import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../../share/nav/Nav";
import style from './owner_home.module.css';
import axios from "axios";
import { useDispatch } from "react-redux";

type Props = {};

const OwnerHome = (props: Props) => {
    const navigate = useNavigate();
    const handlePlot = () => {

        navigate('plots');
    }
// import { isLoggedin } from "../../../api/owner";

    const handleUser = async (e: any) => {
        e.preventDefault();
        navigate('users');
        try {
            const response = await axios.get("http://localhost:5000/owner/users");
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <>
        <Nav name="owner" BtnAction={"/owner"}/>
            <div className={style.main_image}>
                <button onClick={handleUser} className={style.button}>User</button>
                <button onClick={handlePlot} className={style.button}>Plot</button>
            </div>
        </>
    )
}

export default OwnerHome;
