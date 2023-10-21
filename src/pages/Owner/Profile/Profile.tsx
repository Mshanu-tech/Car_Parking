import React from 'react'
import style from './profile.module.css'
import Btn from '../../../components/button/Btn'
import { isLogout } from '../../../api/owner'
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux'

type Props = {}

const Profile: React.FC<Props> = () => {
  // const name = useSelector((state:any)=>state.login.name)
  // const phone =useSelector((state:any)=>state.login.phone)  
  // const email =useSelector((state:any)=>state.login.email)  

  const navigate = useNavigate()

  const handleLogout = () => {
    // isLogout()
    navigate('/owner')
  }

  const userDataString = localStorage.getItem('owner');
  const userData = userDataString ? JSON.parse(userDataString) : {};

  console.log(userData);
  

  return (
    <>
      <div className={style.profile}>
        <div className={style.card}>
          <Image className={style.image} src="/image/owner/owner_home.jpg" rounded />
          <div className={style.Btn}>
          <Btn color='white'  buttonhandler={handleLogout} Btnname='Logout'/>
          <button>edit</button>
          </div>

          <div className={style.data}>
          <p> Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
        </div>
      </div>
    </>
  )
}

// Name: {userData.name}
// Email: {userData.email}
// Phone: {userData.phone}

export default Profile
