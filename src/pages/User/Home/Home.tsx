import React, { useState } from 'react';
import Nav from '../../../share/nav/Nav';
import homeStyles from './home.module.css';
import Search from '../../../components/search/Search';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../components/createSlice/ParkingTime';

const Home: React.FC = () => {

  const dispatch = useDispatch();

  const [ startingTime, setstartingTime ] = useState('')
  const [ startingDate, setstartingDate ] = useState('')

  const [ endingTime, setendingTime ] = useState('')
  const [ endingDate, setendingDate ] = useState('')

  const navigate = useNavigate()
  

  const HandleSearch = () =>{
    const carTime = {
      startingTime,startingDate,endingTime,endingDate
    }
    dispatch(ADD(carTime))
    console.log(carTime);
    navigate('/Place')
  }
  return (
    <>
      <div className='container-fluid'>
      <Nav name='user' BtnAction={""}/>
        <section className={homeStyles.main_image}>
          <div style={{width:"1000px"}} className="row justify-content-center">
          <Search searchAction={HandleSearch}/>

            <div className={homeStyles.search}>

              <div className={homeStyles.date_time}>
                <div >
                  <input onChange={(e)=>setstartingTime(e.target.value)} className={homeStyles.time} type="time" name="startingTime" id="" />
                </div>
                <div>
                  <input onChange={(e)=>setstartingDate(e.target.value)} name='startingDate' type="date" />
                </div>
              </div>

              <div className={homeStyles.date_time}>
                <div >
                  <input onChange={(e)=>setendingTime(e.target.value)} className={homeStyles.time} type="time" name="endingTime" id="" />
                </div>
                <div>
                  <input onChange={(e)=>setendingDate(e.target.value)} type="date" name='endingDate' />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* <section className={`${homeStyles.product_version}`}>
          <h1 style={{ fontWeight: "bold"}}>Product Version</h1>
          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "50px" }}>New Version</h4>
            <img style={{width:"383px",marginBottom:"30px"}} src="/image/user/product1.png" alt="" />  
            <img style={{width:"383px" }} src="/image/user/product2.png" alt="" />
          </div>

          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "50px" }}>Previous Version</h4>
            <img style={{width:"320px",marginBottom:"28px"}} src="/image/user/product1.1.png" alt="" />  
            <img style={{width:"320px"}} src="/image/user/product2.1.png" alt="" />  
          </div>
        </section> */}

      </div>
    </>
  );
};

export default Home;
