import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
  btnName: string;
  btnColor: any;
  updateData: any;
  Data: any;
}

const EditForm: React.FC<Props> = ({ updateData, btnColor, btnName, Data }) => {
  const [show, setShow] = useState(false);
  const [newImage, setNewImage] = useState<null | File>(null);
  const [editedData, setEditedData] = useState({ ...Data });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditedData({ ...Data });
    setShow(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      const file = event.target.files[0];      
      setNewImage(file);
      console.log(newImage);

    }else{
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  };

  const handleData = () => {
    updateData(editedData,newImage);
    handleClose();
  };

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
