import React, { useState } from 'react';
import style from './login.module.css';
// import axios from 'axios';
import { ownerLogin } from '../../../service/ownerApi';
import {ownerSignup} from '../../../service/ownerApi';
import {ADD} from '../../../components/createSlice/OwnerSignup'
import { saveOwner } from '../../../api/owner';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { OwnerData } from '../../../components/createSlice/OwnerLogin';
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../../../images/uploadImage';

// type Props = {};
// props: Props

const Login: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [message, setmessage]=useState('')
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [password, setpassword] = useState('')
  const [image, setimage] = useState(null)

  const handleSignup = async (e: any) => {

    e.preventDefault();
    const uniqueId = uuidv4();
    const fileExtension = image?.name.split('.').pop();
    const uniqueImageName = `${uniqueId}.${fileExtension}`;

    uploadImage('owner/',image,uniqueImageName,()=>{
      alert('Image uploaded successfully!');
    });
    const userData = {
      name,
      email,
      number,
      password,
      Image: uniqueImageName
    };
    // console.log(userData);
    dispatch(ADD(userData))
   await ownerSignup(userData)
   .then((res) => {
    if(res.data === "plz fill the property"){
      setmessage("plz fill the property")
    }
    else if(res.data === "Email already exist"){
      setmessage("'Email already exist'")
    }
    else if(res.data === "success"){
      navigate('/owner/otpverification')
    }else{
      alert("Not Get a Owner")
    }
   })


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
    };
  
    // try {

      // await axios.post("http://localhost:5000/owner/login", loginData)
    await  ownerLogin(loginData)
        .then(res => {
          if (res.data === "email not get") {
            alert("email not get");
          }else if(res.data === "password wrong"){
            alert(" wrong password")
          }else if(res.data === "fail"){
            alert("not get owner")
          }else {
            const data = res.data
            saveOwner(data)
            dispatch(OwnerData(data))
            navigate("/owner")
          }
        })
        .catch(error => {
          console.log(error);
        });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  

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
                          <h4 className="pb-3">Sign Up</h4>
                          <p>{message}</p>
                          <div className={`${style['form-group']}`}>
                            <input type="text" onChange={(e) => { setName(e.target.value) }} className={style['form-style']} placeholder="Your Full Name" id="logname" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-user`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="email" onChange={(e) => { setemail(e.target.value) }} className={style['form-style']} placeholder="Your Email" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-at`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="text" onChange={(e) => { setnumber(e.target.value) }} className={style['form-style']} placeholder="Your Phone" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-phone`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="password" onChange={(e) => { setpassword(e.target.value) }} className={style['form-style']} placeholder="Your Password" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-lock-alt`}></i>
                          </div>
                          <div className={`${style['form-group']} mt-2`}>
                            <input type="file" onChange={(e:any) => { setimage(e.target.files[0]) }} className={style['form-style']} placeholder="Image" autoComplete="off" />
                            <i className={`${style['input-icon']} uil uil-image`}></i>
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
