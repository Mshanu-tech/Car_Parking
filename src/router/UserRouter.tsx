// import React from 'react'
import Home from '../pages/User/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/User/Login/Login'
import Place from '../pages/User/search_place/Place'

type Props = {}

const UserRouter = (props: Props) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='place' element={<Place/>}/>
    </Routes>
    </>
    )
}

export default UserRouter