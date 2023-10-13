import React, { useState } from 'react'
import style from './form.module.css'
import { ADD } from '../../../components/createSlice/CardSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CarDetails } from '../../../service/userApi'
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../../../images/uploadImage'

type Props = {}

const Form: React.FC<Props> = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [carNo, setCarno] = useState('')
  const [photo, setPhoto] = useState(null)

  const startingTime = useSelector((state: any) => state.parkingTime.startingTime)
  const startingDate = useSelector((state: any) => state.parkingTime.startingDate)
  const endingTime = useSelector((state: any) => state.parkingTime.endingTime)
  const endingDate = useSelector((state: any) => state.parkingTime.endingDate)
  const Payment = useSelector((state:any) => state.parkingTime.price)
  const Time = useSelector((state:any) => state.parkingTime.time)


  const handlesubmit = (e: any) => {

    const uniqueId = uuidv4();
    const fileExtension = photo?.name.split('.').pop();
    const uniqueImageName = `${uniqueId}.${fileExtension}`;
  
    uploadImage('carImage/',photo, uniqueImageName, () =>{
      alert('Image uploaded successfully!');
    })

    const id = Math.random()
    // console.log(id);
    e.preventDefault()
    const obj = {
      name, email, phone, carNo, id, uniqueImageName, startingTime,
       startingDate, endingTime, endingDate, Time, Payment
    }

    dispatch(ADD(obj))
    // CarDetails(obj)
    navigate('/card')
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={style.form_div}>
            <form onSubmit={handlesubmit} className={style.form} action="">
              <label htmlFor="">Name</label>
              <input onChange={(e) => setName(e.target.value)} type="text" />
              <label htmlFor="">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" />
              <label htmlFor="">Phone</label>
              <input onChange={(e) => setPhone(e.target.value)} type="text" />
              <label htmlFor="">Car.No</label>
              <input onChange={(e) => setCarno(e.target.value)} type="text" />
              <label htmlFor="">Car photo</label>
              <input onChange={(e: any) => { setPhoto(e.target.files[0]) }} type="file" />
              <input className={style.form_btn} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form