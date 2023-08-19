import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from '../../../../share/nav/Nav'
import style from './form.module.css'
import Btn from '../../../../components/button/Btn';
import { plotForm } from '../../../../service/ownerApi';
import { useNavigate } from 'react-router-dom';

// type Props = {}

const PlotForm: React.FC = () => {

  const navigate = useNavigate()

  // const [images, setImages] = useState<File[]>([]);

  const [placename , setPlotname]=useState('')
  const [center , setCenter]=useState('')
  const [hour , setHour]=useState('')
  const [day , setDay]=useState('')
  const [month , setMonth]=useState('')
  const [location, setlocation]=useState('')
  const [plotdetails , setPlotdetails]=useState('')
  // console.log(placename);
  

  const handleForm =  (e: any) => {
    e.preventDefault()
    const formData = {
      center,placename,hour,day,month,location,plotdetails
    }
    console.log(formData);
   plotForm(formData)
   navigate('/owner')
  }



  return (
    <>
    <div className={style.form_image}>
      <Nav />
      <div className='container' style={{ display: "flex", justifyContent: "center" }}>
        <Form >
        <Row  className="mb-3">
            <Form.Group >
              <Form.Label>Park Center Name</Form.Label>
              <Form.Control onChange={(e)=>setCenter(e.target.value)} type="text" placeholder="Name" required />
            </Form.Group>
          </Row>
          <Row  className="mb-3">
            <Form.Group>
              <Form.Label>Place Name</Form.Label>
              <Form.Control onChange={(e)=>setPlotname(e.target.value)} type="text" placeholder="Place Name" required />
            </Form.Group>
          </Row>
          <Row  style={{display:"flex",justifyContent:"center"}} className={`mb-3`}>
            {/* <div style={{ display: "flex", alignItems: "flex-end" }}> */}
            <Form.Group>
            <Form.Label>Price</Form.Label>
            {/* <Form.Group as={Col} sm="2" md="2"> */}
              <Form.Control onChange={(e)=>setHour(e.target.value)} type="text" placeholder='Hour' required />
            {/* </Form.Group> */}
            {/* <Form.Group as={Col} sm="2" md="2"> */}
              {/* <Form.Label>1Day</Form.Label> */}
              <Form.Control onChange={(e)=>setDay(e.target.value)} type="text" placeholder='Day' required />
            {/* </Form.Group> */}
            {/* <Form.Group as={Col} sm="3" md="2"> */}
              <Form.Control onChange={(e)=>setMonth(e.target.value)} type="text" placeholder="Month" required />
            {/* </Form.Group> */}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group >
              <Form.Label>Location</Form.Label>
              <Form.Control onChange={(e)=>setlocation(e.target.value)} type="text" placeholder="Sub District" required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group >
              <Form.Label>Plot Image</Form.Label>
              <Form.Control type="file" placeholder="image" required />
            </Form.Group>
            {/* <Form.Group as={Col} md="4">
            <Form.Label>Features</Form.Label>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <img style={{width:"40px"}} src="/image/owner/24hours.jpg" alt="" />
            <input type="radio" name="" id="" />
            <img style={{width:"40px"}} src="/image/owner/Key.jpg" alt="" />
            <input type="radio" name="" id="" />
            <img style={{width:"40px"}} src="/image/owner/cctv.jpg" alt="" />
            <input type="radio" name="" id="" />
            <img style={{width:"40px"}} src="/image/owner/weelchair.jpg" alt="" />
            <input type="radio" name="" id="" />
            </div>
            </Form.Group> */}
          </Row>
          <Row className="mb-3" style={{ display: "flex", alignItems: "flex-end" }}>
            <Form.Group >
              <Form.Label>Plot Details</Form.Label>
              <Form.Control onChange={(e)=>setPlotdetails(e.target.value)} as="textarea" rows={3} placeholder="Details" required />
            </Form.Group>
            <Form.Group as={Col} md="4" style={{marginTop:"13px"}}>
            <Btn Btnname='ADD' color='outline-dark' buttonhandler={handleForm} />
            </Form.Group>
          </Row>
        </Form>
      </div>
      </div>
    </>
  )
}

export default PlotForm
