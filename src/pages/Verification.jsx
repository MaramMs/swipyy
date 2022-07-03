import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomsAlert } from "../components";
import CustomModal from "../components/CustomModal";
import logo from "../img/8.svg";

const Verification = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [code,setCode] = useState('')
  const [error,setError] = useState('')
  const [message,setMessge] = useState('')
  // let navigate = useNavigate()

  const handleCode = (e) =>{
    e.preventDefault()
    setCode(e.target.value)
  }

  const handleVerify = async () => {
    if (code) {
      const payload = {
      code
      
      };
      console.log(payload);
   try {
    const response = await axios.post('/api/user/verify' , payload)
    console.log(response);
    if (response.data.status.code === '200') {
      setError("");
      setShow(!show)
      setMessge(response.data.status.message)
    }
   } catch (error) {
    console.log(error);
    setError(error.response.data.error)
   }
  }
  }
  // const handleResend = () =>{

  // }
  return (
    <Div>
      <div className="signup">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="colour"></div>
          <div className="colour2"></div>
        </div>
        <div className="signup-form">
          <h1 className="title">Identity Verification</h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Verification code*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="* * * *"
                  className="input"
                  onChange={handleCode}
                />
                <Form.Text className="text-muted">
                  *Please enter the verification code that was asked to the
                  email Ah****66@gmail.com
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                className="button"
                onClick={handleVerify}
          
              >
                Verify
              </Button>
              {show && (
                <div className="container-modal">
                  <CustomModal
                    message={message}
                    path="/"
                  />
                </div>
              )}

              <p className="verify-code">
                I didn't get the code?
                <Button onClick={() => setOpen(!open)} className="re-send">
                  Re-send
                </Button>
              </p>

              {open && (
                <div className="container-modal">
                  <CustomModal
                    text="A code verification has been sent to your email"
                    index
                    path='/'
    
                  />
                </div>
              )}

              {
                error && <CustomsAlert error={error}/>
              }
            </Form>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .signup {
    display: flex;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #8055f0;
      width: 100%;
      height: 100vh;
      position: relative;
      overflow: hidden;
      .colour {
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background-image: linear-gradient(#dd81ff, #1238ff);
        position: absolute;
        left: 80%;
        top: 10%;
      }
      .colour2 {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-image: linear-gradient(#dd81ff, #1238ff);
        position: absolute;
        left: -5%;
        bottom: -6%;
      }
    }
    .signup-form {
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      .title {
        position: absolute;
        top: 12%;
        left: 20%;
        font-weight: bold;
      }
      .form {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 40%;
        .label {
          color: #163152;
          font-size: 15px;
        }
        .input {
          padding: 12px;
          text-align: center;
          letter-spacing: 8px;
          margin-bottom: 10px;
        }
        .input::placeholder {
          padding: 12px;
          color: #969ba3;
          font-size: 14px;
          font-family: "Regular";
        }
        .form-text {
          color: #969ba3;
          font-size: 14px;
          width: 50%;
          margin-top: 20px;
        }
        .button {
          width: 100%;
          background-color: #8055f0;
          padding: 15px 0px;
          margin-bottom: 30px;
          font-family: "Regular";
        }
        .verify-code {
          color: #163152;
          font-size: 16px;
        }
        .verify-code a {
          text-decoration: none;
          color: #163152;
          margin-left: 10px;
          font-weight: bold;
        }
      }
    }
    .re-send {
      background-color: transparent;
      border: none;
      color: #163152;
      font-weight: bold;
    }
    .container-modal {
      position: absolute;
      top: 98.5%;
      left: -50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.7);
      width: 100vw;
      height: 100vh;
    }
  }

  @media (max-width: 575.98px) {
    .signup {
      .logo {
        display: none;
      }
      .signup-form {
        height: 51vh;
        .title {
          top: 7%;
          left: 6%;
        }
        .form {
          width:80%;
          left: 5%;
        }
      }
      .container-modal {
        left:56%
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .signup{
      .signup-form {
        .title {
          top: 5%;
          left:5%;
        }
        .form {
          width:80%;
          left:5%;
          top:11%;
          .line{
            margin:0px;
          }
        }
      }
      .container-modal {
        left:-6%;
        top:93%;
      }
    }
   
  }
`;
export default Verification;
