import React, { useEffect, useState } from 'react'
import Nav from '../../../share/nav/Nav'
import style from './plot.module.css'
import Btn from '../../../components/button/Btn'
import { useNavigate, useParams } from 'react-router-dom'
import { getPlot } from '../../../service/ownerApi'
import { fetchImageURLs } from '../../../images/downloadIamge'

// type Props = {}

const Plot:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [Data, setData] = useState({})  
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const navigate = useNavigate()

  const handlebooking = () =>{
    navigate('/form')
  }

  useEffect(()=>{
    getPlot(id)
    .then((res) => {
      if (res.data === 'fail') {
        alert('Data not get');
      } else {
        var plotData = res.data;
        setData(plotData);
      }
    });
    fetchImageURLs('img/')
    .then((url) => {
      setImageURLs(url);
    })
    .catch((error) => {
      console.error('Error fetching image URLs:', error);
    });
  },[id])

  //find image
  const image = imageURLs.find((img) => img.name === Data.images);
  // console.log(image);
  


  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        <Nav/>
        <h4 > {Data.center} </h4>
        <div className={`col-sm-12 col-md-12 ${style.plot}`}>
          <div style={{width:"50%"}}>
        <div className={style.plot_image}>
          <img src={image?.url} alt="" />
        </div>
           {/* <div style={{display:"flex",marginTop:"20px"}}>
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        </div> */}
        </div> 
        <div style={{width:"45%"}}>
        <div className={style.plot_details}>
            <h5 style={{color:"black"}}>Details : About the car parking</h5>
            <p className={style.plot_details_p}> {Data.plotdetails} </p>
        </div>
        {/* <div className={style.card}>
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
            <Btn buttonhandler={handlebooking} Btnname='BOOKING FOR 100E' color='outline-danger'/>
        </div>   */}
        </div>
        <div>
          <p className={style.plot_details_p}> {Data.placename} </p>
        </div>
     
        </div>
    </div>
        </div>

    </>
  )
}

export default Plot