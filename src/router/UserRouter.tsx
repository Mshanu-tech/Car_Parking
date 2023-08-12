import React from 'react'
import Home from '../pages/User/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/User/Login/Login'
import Place from '../pages/User/search_place/Place'
import Plot from '../pages/User/Plot/Plot'
import Form from '../pages/User/Booking_Form/Form'
import Card from '../pages/User/card/Card'

type Props = {}

const UserRouter:React.FC<Props> = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='place' element={<Place/>}/>
        <Route path='plot' element={<Plot/>}/>
        <Route path='form' element={<Form/>}/>
        <Route path='card' element={<Card/>}/>
    </Routes>
    </>
    )
}

export default UserRouter