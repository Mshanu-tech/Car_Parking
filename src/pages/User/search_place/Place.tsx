import React, { useEffect, useState } from 'react'
import Nav from '../../../share/nav/Nav'
import style from './Place.module.css'
import Search from '../../../components/search/Search'
import Image from 'react-bootstrap/Image';
// import Card from '../../../share/card/Card'
import { useNavigate } from 'react-router-dom'
import { Plots } from '../../../service/userApi'

const Place: React.FC = () => {
  const [Data, setData] = useState([]);
  const [state, setstate] = useState(false)
  const navigate = useNavigate();

  const handleCard = () => {
    navigate('/plot');
  }

  const handleLocation = () =>{

  }

  useEffect(() => {
    Plots()
      .then((res) => {
        if (res.data === "fail") {
          alert("not fetched");
        } else {
          const data = res.data;
          setData(data);
        }
      });
  }, []);

  return (
    <div className='container-fluid'>
      <Nav />
      <div className={style.search_time}>
        <Search />
        <div className={style.time_date}>
          <div>
            <input type="time" />
            <input type="date" name="" id="" />
          </div>
          <div>
            <input type="time" />
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>

      <div className={style.alignCard}>
        {Data.map((e: any, index: number) => (
          <div onClick={handleLocation} key={index} className={`card ${style.responsiveCard}`}>
                <Image
                    className={style.image}
                    src=""
                    rounded
                />
                <div className={style.cardname}>
                    <h6>Name: {e.placename} </h6>
                    <h6>{}</h6>
                    <h6></h6>
                </div>
                <iframe src={e.location} width="300" height="150" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            
        ))}
      </div>
      <div >

      </div>

      {/* <iframe src="" width="300" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  )
}

export default Place;
