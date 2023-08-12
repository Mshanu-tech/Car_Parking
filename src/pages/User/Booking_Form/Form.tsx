import React, { useState } from 'react'
import style from './form.module.css'
import  {ADD } from '../../../components/createSlice/CardSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

type Props = {}

const Form:React.FC<Props> = () => {

  const dispatch = useDispatch();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [carNo,setCarno]=useState('')

  const navigate = useNavigate()
  

  const handlesubmit = (e:any) =>{
    const id = Math.random()
    // console.log(id);
    e.preventDefault()
    const obj = {
      name,email,phone,carNo,id
    }
    dispatch(ADD(obj))
    navigate('/card')
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className={style.form_div}>
                <form onSubmit={handlesubmit} className={style.form} action="">
                <label htmlFor="">Name</label>
                <input onChange={(e)=>setName(e.target.value)} type="text" />
                <label htmlFor="">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" />
                <label htmlFor="">Phone</label>
                <input onChange={(e)=>setPhone(e.target.value)} type="text" />
                <label htmlFor="">Car.No</label>
                <input onChange={(e)=>setCarno(e.target.value)} type="text" />
                <label htmlFor="">Car photo</label>
                <input type="file" />
                <input className={style.form_btn} type="submit" />
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form