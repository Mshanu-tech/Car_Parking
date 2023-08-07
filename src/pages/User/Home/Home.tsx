import React from 'react';
import Nav from '../../../share/nav/Nav';
import homeStyles from './home.module.css';
import Form from 'react-bootstrap/Form';
import 'boxicons';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate()

  const HandleSearch = () =>{
    navigate('/Place')
    console.log("hello");
    
  }
  return (
    <>
      <div className='container-fluid'>
        <Nav />
        <section className={homeStyles.main_image}>
          <div className="row justify-content-center">
            <div className={` ${homeStyles.search_image}`}>
              <div className={`row ${homeStyles.search}`}>
                <Form.Control className={homeStyles.search_input}
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder='Search'
                />
                <button onClick={HandleSearch} className={homeStyles.search_button}><i style={{ paddingTop: "7px" }} className='bx bx-search bx-sm'></i></button>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input className={homeStyles.time} type="time" name="" id="" />
                </div>
                <div className="col">
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${homeStyles.product_version}`}>
          <h1 style={{ fontWeight: "bold"}}>Product Version</h1>
          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "50px" }}>New Version</h4>
            <img style={{width:"383px",marginBottom:"30px"}} src="/image/user/product1.png" alt="" />  
            <img style={{width:"383px" }} src="/image/user/product2.png" alt="" />
          </div>

          <div>
            <h4 style={{ fontWeight: "bold", marginBottom: "50px" }}>Previous Version</h4>
            <img style={{width:"320px",marginBottom:"28px"}} src="/image/user/product1.1.png" alt="" />  
            <img style={{width:"320px"}} src="/image/user/product2.1.png" alt="" />  
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
