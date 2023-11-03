import React, {  useState, useRef } from 'react';

interface Props {
  Token: (otpValue: string) => void;
};

const Otpverification: React.FC<Props> = ({Token}) => {
  const [otpValues, setOtpValues] = useState("");
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];


  const handleInputChange = (index: number, value: string) => {
    if (/[0-9]/.test(value)) {
      const newOtpValues = otpValues.split('');
      newOtpValues[index] = value;
      setOtpValues(newOtpValues.join(''));
      
      if (index < 3 && value) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Token(otpValues)
    console.log(otpValues);
  };

  return (
    <>
      <style>
      {`
          body{background-color:red}
          .height-100{height:100vh}
          .card{width:400px;border:none;height:300px;box-shadow: 0px 5px 20px 0px #d2dae3;z-index:1;display:flex;justify-content:center;align-items:center}
          .card h6{color:red;font-size:20px}
          .inputs input{width:40px;height:40px}
          input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button{
            -webkit-appearance: none;-moz-appearance: none;appearance: none;margin: 0}
          .card-2{background-color:#fff;padding:10px;width:350px;height:100px;bottom:-50px;left:20px;position:absolute;border-radius:5px}
          .card-2 .content{margin-top:50px}
          .card-2 .content a{color:red}
          .form-control:focus{box-shadow:none;border:2px solid red}
          .validate{border-radius:20px;height:40px;background-color:red;border:1px solid red;width:140px}
        `}
      </style>
      <div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <form onSubmit={handleSubmit}>
            <div className="card p-2 text-center">
              <h6>Please enter the one-time password <br /> to verify your account</h6>
              <div></div>
              <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                {inputRefs.map((inputRef, index) => (
                  <input
                    key={index}
                    ref={inputRef}
                    className="m-2 text-center form-control rounded"
                    name={`digit${index + 1}`}
                    type="text"
                    id={`digit${index + 1}`}
                    maxLength={1}
                    value={otpValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <div className="mt-4">
                <button className="btn btn-danger px-4 validate">Validate</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otpverification;
