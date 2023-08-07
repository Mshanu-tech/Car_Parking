import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';

const nav: React.FC = () => {
  const navigate = useNavigate()
  const handleBtn = () => {
    console.log("heelo")
    navigate('login')
  }
  return (
    <Navbar expand="lg">
      <Container fluid style={{ width: "90%" }}>
        <Navbar.Brand href="#"><img style={{ width: "70px" }} src="/image/user/icon.jpg" alt="" /></Navbar.Brand>
        <Btn color='outline-success' Btnname="LOGIN" buttonhandler={handleBtn} />
      </Container>
    </Navbar>
  );
}

export default nav;