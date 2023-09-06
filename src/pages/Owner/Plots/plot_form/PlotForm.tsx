import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from '../../../../share/nav/Nav'
import style from './form.module.css'
import Btn from '../../../../components/button/Btn';
import { plotForm } from '../../../../service/ownerApi';
import { uploadImage } from '../../../../images/uploadImage';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const PlotForm: React.FC = () => {

  const navigate = useNavigate()

  const [placename, setPlotname] = useState('')
  const [center, setCenter] = useState('')
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [location, setlocation] = useState('')
  const [plotdetails, setPlotdetails] = useState('')
  const [image, setimage] = useState(null)
  const handleForm = (e: any) => {
    e.preventDefault()
    const uniqueId = uuidv4();
    const fileExtension = image.name.split('.').pop();
    const uniqueImageName = `${uniqueId}.${fileExtension}`;
  
    uploadImage("img/", image, uniqueImageName, () => {
      alert("Image uploaded successfully!");
    });


    const formData = {
      center, placename, hour, day, month, location, plotdetails, Image: uniqueImageName,

    }
    plotForm(formData)

    navigate('/owner/plots')
  }



  return (
    <>
      <div className={style.form_image}>
        <Nav />
        <div className='container' style={{ display: "flex", justifyContent: "center" }}>
          <Form >
            <Row className="mb-3">
              <Form.Group >
                <Form.Label>Park Center Name</Form.Label>
                <Form.Control onChange={(e) => setCenter(e.target.value)} type="text" placeholder="Name" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>Place Name</Form.Label>
                <Form.Control onChange={(e) => setPlotname(e.target.value)} type="text" placeholder="Place Name" required />
              </Form.Group>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }} className={`mb-3`}>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={(e) => setHour(e.target.value)} type="text" placeholder='Hour' required />
                <Form.Control onChange={(e) => setDay(e.target.value)} type="text" placeholder='Day' required />
                <Form.Control onChange={(e) => setMonth(e.target.value)} type="text" placeholder="Month" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group >
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={(e) => setlocation(e.target.value)} type="text" placeholder="Sub District" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group >
                <Form.Label>Plot Image</Form.Label>
                <Form.Control onChange={(e: any) => { setimage(e.target.files[0]) }} type="file" placeholder="image" required />
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
                <Form.Control onChange={(e) => setPlotdetails(e.target.value)} as="textarea" rows={3} placeholder="Details" required />
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ marginTop: "13px" }}>
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
