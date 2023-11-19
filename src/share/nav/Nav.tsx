import React from 'react';
import Nav from '../../components/nav/Nav';
import { isLoggedin } from '../../api/owner';
import { useNavigate } from 'react-router-dom';
import { userIsLoggedin } from '../../api/user';


interface Props {
  name: string;
  BtnAction: any;
}

const NavComponent: React.FC<Props> = ({ BtnAction, name }) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(`${BtnAction}/profile`);
    const val = localStorage.getItem("owner");
    console.log(val);
  };

  const handleLogin = () => {
    navigate(`${BtnAction}/login`);
    console.log(isLoggedin);
  };

  return (
    <>
      {name === "owner" ? (
        isLoggedin() ? (
          <Nav BtnName="Profile" BtnAction={handleProfile} />
        ) : (
          <Nav BtnName="Login" BtnAction={handleLogin} />
        )
      ) : name === "user" ? (
        userIsLoggedin() ? (
          <Nav BtnName="Profile" BtnAction={handleProfile} />
        ) : (
          <Nav BtnName="Login" BtnAction={handleLogin} />
        )
      ) : null}
    </>
  );
};

export default NavComponent;
