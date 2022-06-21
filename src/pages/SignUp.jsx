import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import logo from "../img/8.svg";

const SignUp = () => {
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
          <h1 className="title">Sign Up</h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Email address*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="input"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Create Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Repeat Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repeat Password"
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="label"
                  type="checkbox"
                  label="I agree to the Terms of Service and Privacy Policy"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Sign Up
              </Button>
              <span className="line"> Or </span>
              <Button variant="primary" type="submit" className="btn-signup">
                <FcGoogle className="icon" />
                Sign up with Google
              </Button>

              <Button variant="primary" type="submit" className="btn-signup">
                <img
                  className="icon"
                  src="https://img.icons8.com/color/48/undefined/facebook-new.png"
                  alt="facebook"
                />
                Sign up with Facebook
              </Button>
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
      overflow:hidden;
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

        .label {
          color: #163152;
          font-size: 15px;
        }
        .input {
          padding: 12px;
        }
        .input::placeholder {
          padding: 12px;
          color: #969ba3;
          font-size: 14px;
          font-family: "Regular";
        }
        .button {
          width: 100%;
          background-color: #8055f0;
          padding: 15px 0px;
          margin-bottom: 30px;
          font-family: "Regular";
        }
        .line {
          color: #bababa;
          justify-content: center;
          align-items: center;
          display: flex;
          gap: 10px;
          margin: 20px;
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: #f5f5f5;
          }
          &:before {
            content: "";
            width: 100%;
            height: 2px;
            background-color: #f5f5f5;
          }
        }

        .btn-signup {
          width: 100%;
          background: #fff;
          color: #8692a6;
          border: none;
          margin-bottom: 20px;
          padding: 14px;
          box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.08);
          border-raduis: 6px;
          font-family: "Montserrat";
          display: flex;
          gap: 40px;
          align-items: center;
        }
        .icon {
          font-size: 20px;
          margin-left: 20px;
        }
        img.icon {
          width: 30px;
        }
      }
    }
  }
`;

export default SignUp;
