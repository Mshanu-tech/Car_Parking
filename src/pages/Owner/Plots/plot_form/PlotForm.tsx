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
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({});
  const [placename, setPlotname] = useState('')
  const [center, setCenter] = useState('')
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [location, setlocation] = useState('')
  const [plotdetails, setPlotdetails] = useState('')
  const [carspot, setCarSpot] = useState('')
  const [notworking, setNotWorking] = useState('')
  const [image, setimage] = useState(null)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
    setSelectedFeatures((prevSelectedFeatures) => ({
      ...prevSelectedFeatures,
      [name]: checked,
    }));
  };
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()

    const selectedFeaturesArray = Object.keys(selectedFeatures)
      .filter((feature) => selectedFeatures[feature]);

    const uniqueId = uuidv4();
    const fileExtension = image.name.split('.').pop();
    const uniqueImageName = `${uniqueId}.${fileExtension}`;
  
    uploadImage("img/", image, uniqueImageName, () => {
      alert("Image uploaded successfully!");
    })

    const formData = {
      center, placename, carspot, hour, day, month, location, notworking, plotdetails, Image: uniqueImageName,
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
              <Form.Group as={Col} md="4" >
                <Form.Label>Park Center Name</Form.Label>
                <Form.Control onChange={(e) => setCenter(e.target.value)} type="text" placeholder="Name" required />
              </Form.Group>
            {/* </Row>
            <Row className="mb-3"> */}
              <Form.Group as={Col} md="4">
                <Form.Label>Place Name</Form.Label>
                <Form.Control onChange={(e) => setPlotname(e.target.value)} type="text" placeholder="Place Name" required />
              </Form.Group>
            </Row>
            <Row style={{ display: "flex", justifyContent: "flex-start" }} className={`mb-3`}>
              
                <Form.Label>Price</Form.Label>
                <Form.Group style={{width:"30%"}}>
                <Form.Control onChange={(e) => setHour(e.target.value)} type="text" placeholder='Hour' required />
                </Form.Group>
                <Form.Group style={{width:"30%"}}>
                <Form.Control onChange={(e) => setDay(e.target.value)} type="text" placeholder='Day' required />
                </Form.Group>
                <Form.Group style={{width:"30%"}}>
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
            <Form.Group as={Col} md="4">
                <Form.Label>How many car spot</Form.Label>
                <Form.Control onChange={(e) => setCarSpot(e.target.value)} type="text" placeholder="Spot" required />
              </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>which car spot not working</Form.Label>
                <Form.Control onChange={(e) => setNotWorking(e.target.value)} type="text" placeholder="Spot" required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group >
                <Form.Label>Plot Image</Form.Label>
                <Form.Control onChange={(e: any) => { setimage(e.target.files[0]) }} type="file" placeholder="image" required />
              </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group style={{width:"50%"}} as={Col} md="4">
            <Form.Label>Features</Form.Label>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <img style={{width:"40px"}} src="/image/owner/24hours.jpg" alt="" />
            <input
                onChange={handleInput}
                type="checkbox"
                name="24hours"
                id="24hours"
                checked={selectedFeatures['24hours'] || false}/>            
                {/* <img style={{width:"40px"}} src="/image/owner/Key.jpg" alt="" />
            <input onClick={handleInput} type="radio" name="Key" id="" />
            <img style={{width:"40px"}} src="/image/owner/cctv.jpg" alt="" />
            <input onClick={handleInput} type="radio" name="cctv" id="" />
            <img style={{width:"40px"}} src="/image/owner/weelchair.jpg" alt="" />
            <input onClick={handleInput} type="radio" name="weelchair" id="" /> */}
            </div>
            </Form.Group>
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
