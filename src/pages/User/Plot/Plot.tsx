import React from 'react'
import Nav from '../../../share/nav/Nav'
import style from './plot.module.css'
import Btn from '../../../components/button/Btn'
import { useNavigate } from 'react-router-dom'

// type Props = {}

const Plot:React.FC = () => {

  const navigate = useNavigate()

  const handlebooking = () =>{
    navigate('/form')
  }

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        <Nav/>
        <h4 >Fuencarral</h4>
        <div className={`col-sm-12 col-md-12 ${style.plot}`}>
          <div style={{width:"50%"}}>
        <div className={style.plot_image}>
            
            
        </div>
           <div style={{display:"flex",marginTop:"20px"}}>
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        </div>
        </div> 
        <div style={{width:"45%"}}>
        <div className={style.plot_details}>
            <h5 style={{color:"black"}}>Details : About the car parking</h5>
            <p className={style.plot_details_p}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit deserunt ipsa, facere soluta corporis facilis fuga provident ratione saepe non animi ullam earum totam maxime itaque incidunt blanditiis similique!
              ciatis modi error? Quod ducimus psa inventore, sapiente velit quibusdam provident totam odit.</p>
        </div>
        <div className={style.card}>
            <h6>CAR  PARK AVAILABILITY</h6>
            <div className={style.mincard}>
                <div>
                <p>PARK ENTRANCE</p>
                <p>Sa, 8 Jul 10:00</p>
                </div>
                <div>
                <p>LEAVE PARK</p>
                <p>Sa, 8 Jul 1:00</p>
                </div>
            </div>
            <b>Selected time: 2 hours</b>
            {/* <button></button> */}
            <Btn buttonhandler={handlebooking} Btnname='BOOKING FOR 100E' color='outline-danger'/>
        </div>  
        </div>
     
        </div>
    </div>
        </div>

    </>
  )
}

export default Plot