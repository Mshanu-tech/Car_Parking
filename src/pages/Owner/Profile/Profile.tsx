import React from 'react'
import style from './profile.module.css'
import Btn from '../../../components/button/Btn'
import { isLogout } from '../../../api/owner'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

type Props = {}

const Profile:React.FC<Props> = () => {
  const name = useSelector((state:any)=>state.login.name)
  console.log(name);
  
  const navigate = useNavigate()

  const handleLogout = () =>{
    isLogout()
    navigate('/owner')
  }

  return (
    <>
    <Btn color='Red' Btnname='Logout' buttonhandler={handleLogout}/>
    <div className="container-fluid">
      <div className="row">
        <div className={style.image}>
        <img style={{width:"250px",borderRadius:"10px"}} src="https://variety.com/wp-content/uploads/2017/06/transformers-the-last-knight-8.jpg?w=1000" alt="" />
        </div>
        <div>
          Name:
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile