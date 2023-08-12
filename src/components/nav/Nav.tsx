import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

interface Props {
  BtnName:string,
  BtnAction:any
}

const nav: React.FC<Props> = ({BtnName,BtnAction}) => {

  return (
    <Navbar expand="lg">
      <Container fluid style={{ width: "90%" }}>
        <Navbar.Brand href="#"><img style={{ width: "70px" }} src="/image/user/icon.jpg" alt="" /></Navbar.Brand>
        <Button onClick={BtnAction} >{BtnName}</Button>
      </Container>
    </Navbar>
  );
}

export default nav;