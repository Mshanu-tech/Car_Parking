import React, { useState } from 'react';
import style from './login.module.css';
import axios from 'axios';
import {userSignup} from '../../../service/ownerApi';

// type Props = {};
// props: Props

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')

  const handleSignup = async (e: any) => {

    
    e.preventDefault();
    const userData = {
      name,
      email,
      phone,
      password
    };
    console.log(userData);

    userSignup(userData)

    // try {
    //   await axios.post("http://localhost:5000/owner/signup", userData);
    //   console.log("success");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    }

    try {

   await axios.post("http://localhost:5000/owner/login", loginData);
      console.log("success",loginData);
    } catch (error) {
      console.log( error);
    }
  }

  return (
    <>

      <div className={style.section}>
        <div className='container'>
          <div className='row'>
            <div style={{ marginTop: "36px" }}>
              <div style={{ textAlign: "center" }}>
                <h6 className={`mb-0 pb-3`}><span>Log In </span><span>Sign Up</span></h6>
                <input className={style.checkbox} type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className={style['card-3d-wrap'] + " mx-auto"}>
                  <div className={style['card-3d-wrapper']}>
                    <div className={style['card-front']}>
                      <div className={style['center-wrap']}>
                        <div className={`${style['section']} ${style['text-center']}`}>
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className={`${style['form-group']}`}>
                            <input type="email" onChange={(e) => { setemail(e.target.value) }} className={style['form-style']} placeholder="Your Email" id="logemail" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-at`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="password" onChange={(e) => { setpassword(e.target.value) }} className={style['form-style']} placeholder="Your Password" id="logpass" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-lock-alt`}></i>
                          </div>
                          <button type="button" onClick={handleLogin} className={style.btn}>Login</button>
                          <p className={`mb-0 mt-4 ${style['text-center']}`}><a href="#0" className={`${style.link}`}>Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className={style['card-back']}>
                      <div className={style['center-wrap']}>
                        <div className={`${style.section} ${style['text-center']}`}>
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className={`${style['form-group']}`}>
                            <input type="text" onChange={(e) => { setName(e.target.value) }} className={style['form-style']} placeholder="Your Full Name" id="logname" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-user`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="email" onChange={(e) => { setemail(e.target.value) }} className={style['form-style']} placeholder="Your Email" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-at`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="text" onChange={(e) => { setphone(e.target.value) }} className={style['form-style']} placeholder="Your Phone" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-phone`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="password" onChange={(e) => { setpassword(e.target.value) }} className={style['form-style']} placeholder="Your Password" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-lock-alt`}></i>
                          </div>
                          <button type="button" onClick={handleSignup} className={style.btn}>Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
