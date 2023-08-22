import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OwnerHome from '../pages/Owner/Home/Owner_home';
import Login from '../pages/Owner/Owner_login/Login';
import Plots from '../pages/Owner/Plots/Plot';
import Plot from '../pages/Owner/Plots/Plot/Plot';
import PlotForm from '../pages/Owner/Plots/plot_form/PlotForm';
import Users from '../pages/Owner/Users/User';
import User from '../pages/Owner/Users/User/User';
import Car from '../pages/Owner/Users/userCar/Car';
import Profile from '../pages/Owner/Profile/Profile';

const OwnerRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<OwnerHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/plots' element={<Plots />} />
        <Route path='/plots/plot/:id' element={<Plot />} />
        <Route path='/plots/plotform' element={<PlotForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/user' element={<User />} />
        <Route path='/users/user/car' element={<Car />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default OwnerRouter;
