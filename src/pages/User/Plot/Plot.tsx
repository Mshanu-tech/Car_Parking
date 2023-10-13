import React, { useEffect, useState } from 'react'
import Nav from '../../../share/nav/Nav'
import style from './plot.module.css'
import Btn from '../../../components/button/Btn'
import { useNavigate, useParams } from 'react-router-dom'
import { getPlot } from '../../../service/ownerApi'
import { fetchImageURLs } from '../../../images/downloadIamge'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE } from '../../../components/createSlice/ParkingTime'

// type Props = {}

const Plot: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [Data, setData] = useState({})
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [Time, setTime] = useState({})
  const [Payment, setPayment] = useState(Number)

  const startingTime = useSelector((state: any) => state.parkingTime.startingTime)
  const startingDate = useSelector((state: any) => state.parkingTime.startingDate)
  const endingTime = useSelector((state: any) => state.parkingTime.endingTime)
  const endingDate = useSelector((state: any) => state.parkingTime.endingDate)


  const handlebooking = () => {
    const obj = {
      startingTime, startingDate, endingTime, endingDate, Time, Payment
    }
    dispatch(UPDATE(obj))
    navigate('/form')
  }

  useEffect(() => {
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


  const timestamp1 = new Date(`${startingDate}T${startingTime}:00`);
  const timestamp2 = new Date(`${endingDate}T${endingTime}:00`);

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = timestamp2 - timestamp1;

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const time = {
    days, hours, minutes
  }
  setTime(time)
  console.log(`Time Difference: ${days} days, ${hours} hours, and ${minutes} minutes`);

  // Calculate the payment
  const payment = (days * 24 + hours + minutes / 60) * 20; // 20 rupees per hour
  setPayment(payment)
  console.log(payment);
  
  }, [id, startingTime, startingDate, endingTime, endingDate]);

  //find image
  const image = imageURLs.find((img) => img.name === Data.images);
  console.log(image);


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Nav />
          <h4 > {Data.center} </h4>
          <div className={`col-sm-12 col-md-12 ${style.plot}`}>
            <div style={{ width: "50%" }}>
              <div className={style.plot_image_container}>
                <img
                  className={style.plot_image}
                  src={image?.url}
                  alt=''
                />
              </div>
              {/* <div style={{display:"flex",marginTop:"20px"}}>
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%",marginRight:"20px"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        <img style={{width:"10%"}} src="https://c8.alamy.com/comp/2J0W2YR/parked-cars-at-the-exit-in-a-large-underground-car-park-2J0W2YR.jpg" alt="" />
        </div> */}
            </div>
            <div style={{ width: "45%" }}>
              <div className={style.plot_details}>
                <h5 style={{ color: "black" }}>Details : About the car parking</h5>
                <p className={style.plot_details_p}> {Data.plotdetails} </p>
              </div>
              <div className={style.card}>
                <h6>CAR  PARK AVAILABILITY</h6>
                <div className={style.mincard}>
                  <div>
                    <p>PARK ENTRANCE</p>
                    <p>{`${startingDate} ${startingTime}`}</p>
                  </div>
                  <div>
                    <p>LEAVE PARK</p>
                    <p>{`${endingDate} ${endingTime}`}</p>
                  </div>
                </div>
                <b>{`Selected time:  ${Time.days} days, ${Time.hours} hours, and ${Time.minutes} minutes`}</b>
                <Btn buttonhandler={handlebooking} Btnname={`BOOKING FOR ${Payment}`} color='outline-danger' />
              </div>
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