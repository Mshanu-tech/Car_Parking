// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Admin/Home/ Home'
import Users from '../pages/Admin/Users/user'
import Owners from '../pages/Admin/Owners/Owner'
import Plots from '../pages/Admin/Plots/Plots'
import User from '../pages/Admin/Users/User/User'
import Owner from '../pages/Admin/Owners/Owner/Owner'
import Plot from '../pages/Admin/Plots/Plot/Plot'
import Login from '../pages/Admin/Login/Login'
// import OwnerPlot from '../pages/Admin/Owners/Owner/Plot/Plot'

// type Props = {}

const AdminRouter = () => {
  return (

    <>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/owners' element={<Owners/>}/>
        <Route path='/plots' element={<Plots/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path='/owners/:id' element={<Owner/>}/>
        {/* <Route path='/owners/:id/plot' element={<OwnerPlot/>}/> */}
        <Route path='/plots/:id' element={<Plot/>}/>
    </Routes>
    </>
    )
}

export default AdminRouter