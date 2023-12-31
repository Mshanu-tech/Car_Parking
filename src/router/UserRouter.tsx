import React from 'react'
import Home from '../pages/User/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/User/Login/Login'
import Place from '../pages/User/search_place/Place'
import Plot from '../pages/User/Plot/Plot'
import Form from '../pages/User/Booking_Form/Form'
import Card from '../pages/User/card/Card'
import Profile from '../pages/User/Profile/Profile'

type Props = {}

const UserRouter:React.FC<Props> = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='place' element={<Place/>}/>
        <Route path='plot/:id' element={<Plot/>}/>
        <Route path='form' element={<Form/>}/>
        <Route path='card' element={<Card/>}/>
    </Routes>
    </>
    )
}

export default UserRouter