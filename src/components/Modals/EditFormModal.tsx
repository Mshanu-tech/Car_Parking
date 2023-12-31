import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateImage } from '../../images/updateImage';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  btnName: string;
  btnColor: any;
  updateData: any;
  Data: any;
}

const EditForm: React.FC<Props> = ({ updateData, btnColor, btnName, Data }) => {
  const [show, setShow] = useState(false);
  // const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({});
  const [editedData, setEditedData] = useState({ ...Data });
  const [uploadedImageName, setUploadedImageName] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditedData({ ...Data });
    setShow(true);
  };

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    event.preventDefault();

    if (type === 'file') {
      const file = event.target.files[0];

      if (file) {
        const uniqueImageName = `${uuidv4()}.${file.name.split('.').pop()}`;

        try {
          await updateImage("img/", `img/${Data.images}`, file, uniqueImageName);
          console.log("Image updated successfully!");

          setUploadedImageName(uniqueImageName);
        } catch (error) {
          console.error("Error updating image:", error);
        }
      }
    } else {
      setEditedData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // const handleInput = (name: string) => {

  // }

  const handleData = () => {
    let updatedData = { ...editedData };

    if (uploadedImageName) {
      updatedData = { ...updatedData, images: uploadedImageName };
    }
    updateData(updatedData);
    console.log(updatedData);

    handleClose();
  };
  console.log(Data.features);


  return (
    <>
      <Button variant={btnColor} onClick={handleShow}>
        {btnName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Center</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="center"
            defaultValue={Data.center}
          />
          <p>Place Name</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="placename"
            defaultValue={Data.placename}
          />
          <p>How many car spot</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="carspot"
            defaultValue={Data.carspot}
          />
          <p>Which car spot not working</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="notworking"
            defaultValue={Data.notworking}
          />

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>

          {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}> */}
  {/* {Object.entries(Data.features).map(([featureName]) => (
    <div key={featureName}>
      <img style={{ width: '40px' }} src={Data.features.imageUrl} alt="" />
      <input
        onClick={() => handleInput(featureName)}
        type="radio"
        name={featureName}
        id={featureName}
        checked={selectedFeatures[featureName]}
      />
      <label htmlFor={featureName}>{Data.features.name}</label>
    </div>
  ))} */}
{/* </div> */}

            {/* <img style={{ width: "40px" }} src="/image/owner/Key.jpg" alt="" />
      <input
        onClick={() => handleInput('Key')}
        type="radio"
        name="Key"
        id="Key"
        checked={selectedFeatures['Key']}
      />
      <img style={{ width: "40px" }} src="/image/owner/cctv.jpg" alt="" />
      <input
        onClick={() => handleInput('cctv')}
        type="radio"
        name="cctv"
        id="cctv"
        checked={selectedFeatures['cctv']}
      /> */}
            {/* <img style={{ width: "40px" }} src="/image/owner/weelchair.jpg" alt="" />
      <input
        onClick={() => handleInput('weelchair')}
        type="radio"
        name="weelchair"
        id="weelchair"
        checked={selectedFeatures['weelchair']}
      /> */}
          </div>


          <p>Price</p>
          <input
            style={{ width: '60px' }}
            onChange={handleInputChange}
            type="text"
            name="hour"
            defaultValue={Data.hour}
          />
          <input
            style={{ width: '60px' }}
            onChange={handleInputChange}
            type="text"
            name="day"
            defaultValue={Data.day}
          />
          <input
            style={{ width: '60px' }}
            onChange={handleInputChange}
            type="text"
            name="month"
            defaultValue={Data.month}
          />
          <input
            onChange={handleInputChange}
            type="file"
            name="images"
          />
          <p>Plot Details</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="plotdetails"
            defaultValue={Data.plotdetails}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditForm;
