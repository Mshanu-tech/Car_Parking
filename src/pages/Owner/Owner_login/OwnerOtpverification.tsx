// import React from 'react'
import Otpverification from '../../../components/Otpverification/Otpverification'
import { Ownerotpverificaton } from '../../../service/ownerApi'

// type Props = {}

const OwnerOtpverification = () => {
  const Otp = (e:any) => {
    console.log(e);
    
    Ownerotpverificaton(e)
  }  
  return (
    <>
        <Otpverification Token={Otp}/>
    </>
  )
}
export default OwnerOtpverification