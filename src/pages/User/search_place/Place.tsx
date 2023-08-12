import React from 'react'
import Nav from '../../../share/nav/Nav'
import style from './Place.module.css'
import Search from '../../../components/search/Search'
import Card from '../../../share/card/Card'
import { useNavigate } from 'react-router-dom'
// type Props = {}

const Place:React.FC = () => {
  const navigate =useNavigate()
  const handleCard =()=>{
    navigate('/plot')
  }
  
  return (
    <>
    <div className='container-fluid'>
    <Nav/>
      <div className={style.search_time}>
      <Search />
      <div className={style.time_date}>
        <div>
        <input type="time" value="13:30"/>
        <input type="date" name="" id="" />
        </div>
        <div>
        <input type="time" value="13:30"/>
        <input type="date" name="" id="" />
        </div>
      </div>
      </div>

      <div className={style.alignCard}>
        <Card cardAction={handleCard} image='https://www.shutterstock.com/shutterstock/videos/1066548280/thumb/8.jpg?ip=x480'/>
        <Card cardAction={handleCard} image='https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg'/>
        <Card cardAction={handleCard} image='https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'/>
      </div>
    </div>

    </>
  )
}

export default Place