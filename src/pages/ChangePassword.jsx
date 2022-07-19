import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import CustomModal from "../components/CustomModal";
import logo from "../img/8.svg";
import axios from "axios";
import FormData from 'form-data';
import { CustomsAlert } from "../components";

const ChangePassword = ({setUser,user})=>{
  console.log(user.login_input)
  const [show, setShow] = useState(false);
   const [password,setPassword] = useState('')
   const [confirmPass , setConfirmPass] = useState('');
   const [code,setCode] = useState('')
   const [error,setError] = useState(false);
   const [message,setMessage] = useState('')
   let navigate  = useNavigate()

  const bodyFormData = new FormData();
  bodyFormData.append("code", code);
  bodyFormData.append('password' ,password )
  bodyFormData.append('password_confirmation' ,confirmPass )
  bodyFormData.append('email',user.login_input)
  const config = {
    method: "post",
    url: "/api/auth/reset/password",
    headers: {
      'content-type':'application/json'
    },
    data: bodyFormData,
  };
  const handleChangePassword = async () => {
    axios(config)
      .then(function (response) {
        if (response.data.status.code === "200") {
          navigate('/signin')
          setError("");
          setMessage(response.data.status.message);
          setShow(!show);
        }
      })
      .catch(function (error) {
        setError(error.response.data.error);
      });
  };
    
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
          <h1 className="title">Change Password</h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">New password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="type the new password here.."
                  className="input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Repeat New password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="type the new password here.."
                  className="input"
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Code *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="type the new password here.."
                  className="input"
                  onChange={(e) => setCode(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                className="button"
                onClick={handleChangePassword}
              >
                Update Password
              </Button>
              {show &&
              <div className="container-modal">
                 <CustomModal text='A password has been reset successfully' path='/signin' />
              </div>
              }

              
        {error && <CustomsAlert error={error} />}
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
    .container-modal{
        position: absolute;
        top: 103%;
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
        left:-5%;
        top:97%;
      }
    }
   
  }
`;
export default ChangePassword;
