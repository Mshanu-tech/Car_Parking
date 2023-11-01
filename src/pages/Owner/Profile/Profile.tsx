import React, { useEffect, useState } from 'react';
import style from './profile.module.css';
import Btn from '../../../components/button/Btn';
import { isLogout } from '../../../api/owner';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { fetchImageURLs } from '../../../images/downloadIamge';
import EditOwner from '../../../components/Modals/EditOwner';
import { editOwner } from '../../../service/ownerApi';

type Props = {};

const Profile: React.FC<Props> = () => {
  
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [Data, setData] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    const userDataString = localStorage.getItem('owner');
    const userData = userDataString ? JSON.parse(userDataString) : {};
    setData(userData);
  }, []); 


  useEffect(() => {
    fetchImageURLs('owner/')
      .then((url) => {
        setImageURLs(url);
      })
      .catch((error) => {
        console.log('Error fetching image URLs:', error);
      });
  }, [Data.id]);

  const image = imageURLs.find((img) => img.name === Data.image);

  const handleLogout = () => {
    isLogout();
    navigate('/owner');
  };

  const updateData = (data:any) =>{
    setData(data)
    editOwner(Data)
  }


  return (
    <>
      <div className={style.profile}>
        <div className={style.card}>
          <Image className={style.image} src={image?.url} rounded />
          <div className={style.Btn}>
            <Btn color="white" buttonhandler={handleLogout} Btnname="Logout" />
            <EditOwner btnColor='outline-success' updateData={updateData} btnName='EDIT' Data={Data} />
          </div>

          <div className={style.data}>
            <p> Name: {Data.name}</p>
            <p>Email: {Data.email}</p>
            <p>Phone: {Data.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
