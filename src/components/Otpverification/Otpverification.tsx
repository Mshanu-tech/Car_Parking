import React from 'react';

type Props = {};

const Otpverification: React.FC<Props> = (props) => {
  console.log("sdkfjhdfs");
  
  return (
    <>
    <h1>xkfjhdfssduoifih</h1>
      {/* <style>
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
          <form action="/verificaton" method="post">
            <div className="card p-2 text-center">
              <h6>Please enter the one time password <br/> to verify your account</h6>
              <div></div>
              <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                <input className="m-2 text-center form-control rounded" name="digit1" type="text" id="first" maxLength={1} />
                <input className="m-2 text-center form-control rounded" name="digit2" type="text" id="second" maxLength={1} />
                <input className="m-2 text-center form-control rounded" name="digit3" type="text" id="third" maxLength={1} />
                <input className="m-2 text-center form-control rounded" name="digit4" type="text" id="fourth" maxLength={1} />
              </div>
              <div className="mt-4">
                <button className="btn btn-danger px-4 validate">Validate</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <script>
        {`
          // Get all the input fields
          const inputs = document.querySelectorAll('#otp input');

          // Add an event listener to each input field
          inputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
              // Get the value of the current input field
              const value = (event.target as HTMLInputElement).value;

              // If the value is a digit, move the focus to the next input field
              if (/[0-9]/.test(value)) {
                // If this is the last input field, submit the form
                if (index === inputs.length - 1) {
                  (event.target.form as HTMLFormElement).submit();
                } else {
                  (inputs[index + 1] as HTMLInputElement).focus();
                }
              }
            });
          });
        `}
      </script> */}
    </>
  );
};

export default Otpverification;
