import React from 'react'
import style from './profile.module.css'
import Btn from '../../../components/button/Btn'
import { isLogout } from '../../../api/owner'
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';

// import { useSelector } from 'react-redux'

type Props = {}

const Profile:React.FC<Props> = () => {
  // const name = useSelector((state:any)=>state.login.name)
  // const phone =useSelector((state:any)=>state.login.phone)  
  // const email =useSelector((state:any)=>state.login.email)  

  const navigate = useNavigate()

  const handleLogout = () =>{
    isLogout()
    navigate('/owner')
  }

  const userDataString = localStorage.getItem('owner');
  const userData = userDataString ? JSON.parse(userDataString) : {};
  

  return (
    <>
    <Btn color='Red' Btnname='Logout' buttonhandler={handleLogout}/>
    <div className="container-fluid">
      <div className="row">
        <div style={{width:"100vw" , height:"100vh"}}>
          <div style={{width:"60%"}}>
        {/* <img className={style.image} src="/image/owner/owner_home.jpg" alt="" /> */}
        <Image className={style.image} src="/image/owner/owner_home.jpg" roundedCircle />

        <button className={style.editBtn}>hai</button>
        </div>
        <div style={{color:"black", display:"flex"}}>
              {/* Name: {userData.name} */}
              {/* // Email: {userData.email} */}
              {/* Phone: {userData.phone} */}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile