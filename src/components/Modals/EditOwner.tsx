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

const EditOwner: React.FC<Props> = ({ updateData, btnColor, btnName, Data }) => {
  const [show, setShow] = useState(false);
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
console.log(Data.image);

        try {
          await updateImage("owner/", `owner/${Data.image}`, file, uniqueImageName);
          console.log("Image updated successfully!");

          setUploadedImageName(uniqueImageName);
        } catch (error) {
          console.error("Error updating image:", error);
        }
      }
    } else {
      setEditedData((prevData: any) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleData = () => {
    let updatedData = { ...editedData };
    if (uploadedImageName) {
      updatedData = { ...updatedData, image: uploadedImageName };
    }
    updateData(updatedData)
    // console.log(updateData);
    
    handleClose();
  }

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
          <p>Name</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="name"
            defaultValue={Data.name}
          />
          <p>Email</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="email"
            name="email"
            defaultValue={Data.email}
          />
          <p>Phone</p>
          <input
            style={{ color: 'black' }}
            onChange={handleInputChange}
            type="text"
            name="phone"
            defaultValue={Data.phone}
          />
          <input
            onChange={handleInputChange}
            type="file"
            name="images"
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
  )
}
export default EditOwner