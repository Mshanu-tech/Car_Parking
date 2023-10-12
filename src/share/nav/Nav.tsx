// import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from '../../components/nav/Nav';
import { isLoggedin } from '../../api/owner';
import { useNavigate } from 'react-router-dom';

interface Props {
  // BtnName:string,
  BtnAction:any
}

const nav: React.FC<Props> = ({BtnAction}) => {

  const navigate = useNavigate()

  const handleProfile = () => {
    navigate(`/${BtnAction}/profile`);
    console.log("profile");
}

const handleLogin = () => {
    navigate(`/${BtnAction}`);
    console.log(`/${BtnAction}`);
}

  return (
   <>
            {isLoggedin() ? (
                <Nav BtnName="Profile" BtnAction={handleProfile} />
            ) : (
                <Nav BtnName="Login" BtnAction={handleLogin} />
            )}

   </>
  );
}

export default nav;