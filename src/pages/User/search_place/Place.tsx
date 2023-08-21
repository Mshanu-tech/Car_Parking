import React, { useEffect, useState } from 'react';
import Nav from '../../../share/nav/Nav';
import style from './Place.module.css';
import Search from '../../../components/search/Search';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { Plots } from '../../../service/userApi';

const Place: React.FC = () => {
  const [Data, setData] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const navigate = useNavigate();

  const handleCard = () => {
    navigate('/plot');
  };

  const handleLocation = (id: any) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    Plots().then((res) => {
      if (res.data === 'fail') {
        alert('not fetched');
      } else {
        const data = res.data;
        setData(data);
      }
    });
  }, []);

  return (
    <div className='container-fluid'>
      <Nav />
      <div className="row">
        <div className={`col-sm-12 col-md-12 col-lg-12 ${style.search_time}`}>
          <Search />
          <div className={style.time_date}>
            <div>
              <input defaultValue="02:30" type="time" />
              <input defaultValue="02/08/2024" type="date" name="" id="" />
            </div>
            <div>
              <input type="time" />
              <input defaultValue="02/08/2024" type="date" name="" id="" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className={style.alignCard}>
            {Data.map((e: any, index: number) => (
              <div
              onDoubleClick={handleCard}
                onClick={() => handleLocation(e._id)}
                key={index}
                className={`card col-12 ${style.responsiveCard}`}
              >
                <Image
                  className={style.image}
                  src=""
                  rounded
                />
                <div className={` ${style.cardname}`}>
                  <h6>Plot_Name: {e.center} </h6>
                  <h6>City:{e.placename}</h6>
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <label>Hour:{e.hour}</label>
                    <label>Day:{e.day}</label>
                  </div>
                </div>               </div>
            ))}
          </div>

          {/* map */}


          {/* <div className={style.leftSide}>
            {selectedCardId ? (
              Data.map((e: any) => (
                <div
                  key={e._id}
                  style={{ display: e._id === selectedCardId ? 'block' : 'none' ,height:"100%"}}
                >
                  {e._id === selectedCardId && (
                    <iframe
                      src={e.location} 
                      width="100%"
                      height="100%"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )}
                </div>
              ))
            ) : (
              <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31303.856607630867!2d75.93269845414157!3d11.262727637715813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64463e3f9e885%3A0xc470e3b737ca36ba!2sMavoor%2C%20Kerala%20673661!5e0!3m2!1sen!2sin!4v1692241553029!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div> */}


          {/* map */}

        </div>
      </div>
    </div>
  );
};

export default Place;
