import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import logo from "../img/8.svg";

const Verification = () => {
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
                />
                <Form.Text className="text-muted">
                  *Please enter the verification code that was asked to the
                  email Ah****66@gmail.com
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="button">
                <Link to="/">Verify</Link>
              </Button>
              <p className="verify-code">
                I didn't get the code?<Link to="/signin">Re-send</Link>
              </p>
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
        .verify-code{
            color:#163152;
            font-size:16px;

        }
        .verify-code a{
            text-decoration:none;
            color:#163152;
            margin-left:10px;
            font-weight:bold;
        }
      }
    }
  }
`;

export default Verification;
