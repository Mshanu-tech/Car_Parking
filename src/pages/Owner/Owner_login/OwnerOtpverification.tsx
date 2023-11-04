// import React from 'react'
import Otpverification from '../../../components/Otpverification/Otpverification'
import { Ownerotpverificaton } from '../../../service/ownerApi'


const OwnerOtpverification = () => {
  const Otp = (e: any) => {
    Ownerotpverificaton(e)
  }
  return (
    <>
      <Otpverification Token={Otp} />
    </>
  )
}
export default OwnerOtpverification