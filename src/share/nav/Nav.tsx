import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import { isLoggedin, isLogout } from '../../api/owner'; // Import isLogout function
import { useNavigate } from 'react-router-dom';
import { userIsLoggedin } from '../../api/user';

interface Props {
  name: string;
  BtnAction: any;
}

const NavComponent: React.FC<Props> = ({ BtnAction, name }) => {
  const navigate = useNavigate();
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  useEffect(() => {
    // Check the login status when the component mounts
    updateLoginStatus();

    // Set up the beforeunload event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Set up the unload event listener (for page refresh)
    window.addEventListener('unload', handleUnload);

    // Cleanup function for removing the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const updateLoginStatus = () => {
    // Update the state based on the login status
    setIsLoggedInState(name === 'owner' ? isLoggedin() : userIsLoggedin());
  };

  const handleProfile = () => {
    navigate(`${BtnAction}/profile`);
    const val = localStorage.getItem('owner');
    console.log(val);
  };

  const handleLogin = () => {
    navigate(`${BtnAction}/login`);
    console.log(isLoggedin);
  };

  const handleBeforeUnload = () => {
    // Remove "owner" data from local storage when the user closes the site or refreshes
    isLogout();
  };

  const handleUnload = () => {
    // Handle the unload event if needed
    // Note: This may not reliably run before the page refreshes due to browser behavior
  };

  return (
    <>
      {isLoggedInState ? (
        <Nav BtnName="Profile" BtnAction={handleProfile} />
      ) : (
        <Nav BtnName="Login" BtnAction={handleLogin} />
      )}
    </>
  );
};

export default NavComponent;
