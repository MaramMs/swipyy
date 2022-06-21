import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import logo from "../img/8.svg";

const SignIn = () => {
  return (
    <Div>
      <div className="signin">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="colour"></div>
          <div className="colour2"></div>
        </div>
        <div className="signin-form">
          <h1 className="title">Sign In</h1>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">
                  Email address or User name*
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="input"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Enter Password *</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  className="label remember"
                  type="checkbox"
                  label="Remember me"
                />
                <Link to="/change-password">
                  <span className="forgot">Forgot Password?</span>
                </Link>
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Sign in
              </Button>
              <span className="line"> Or </span>
              <Button variant="primary" type="submit" className="btn-signin">
                <FcGoogle className="icon" />
               <span> Sign in with Google</span>
              </Button>

              <Button variant="primary" type="submit" className="btn-signin">
                <img
                  className="icon"
                  src="https://img.icons8.com/color/48/undefined/facebook-new.png"
                  alt="facebook"
                />
                <span>Sign in with Facebook</span>
              </Button>

              <p className="not-member">
                Not a member ?<Link to="/signin">Sign up</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .signin {
    display: flex;
    .logo {
      flex:1;
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
        background-image: linear-gradient(#DD81FF,#1238FF);
        position: absolute;
        left: 70%;
        top: 13%;
      }
      .colour2 {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-image: linear-gradient(#dd81ff, #1238ff);
        position: absolute;
        left: -7%;
        bottom: -15%;
      }
    }
    .signin-form {
      flex:1;
      width: 100%;
      max-width:1024px;
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
        width:45%;
        .label {
          color: #163152;
          font-size: 15px;
        }
        .label.remember {
          color: #969ba3;
        }

        .forgot {
          color: #163152;
          font-weight: bold;
          font-size: 14px;
        }
        .form-check-input:checked {
          background-color: #8055f0;
          border-color: #8055f0;
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

        .btn-signin {
          width: 100%;
          background-color: #fff;
          color: #8692a6;
          border: none;
          margin-bottom: 20px;
          padding: 14px 0px;
          box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.08);
          border-raduis: 6px;
          font-family: "Montserrat";
          font-size:15px;
          display: flex;
          gap: 50px;
          align-items: center;
        }
        .icon {
          font-size: 20px;
          margin-left: 30px;
        }
        img.icon {
          width: 30px;
          margin-left:30px;
        }
        .not-member {
          color: #2c2f5b;
          font-size: 16px;
        }
        .not-member a {
          color: #2c2f5b;
          font-weight: bold;
          font-size: 16px;
          text-decoration: none;
          margin-left: 10px;
        }
      }
    }
  }
`;

export default SignIn;
