import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import logo from "../img/8.svg";
import axios from "axios";
import { CustomsAlert } from "../components";
import GoogleLogin  from "react-google-login";
const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [validated, setValidated] = useState(false);
  let navigate = useNavigate();


  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    setError("");

    if (user.email && user.password && user.password_confirmation) {
      const payload = {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      };

      try {
        const response = await axios.post("/api/auth/signup", payload);
        if (response.data.status.code === "200") {
          setData(response.data);
          setError("");
          localStorage.setItem('access_token', response.data.data.access_token);
          navigate("/verification?q='signup'");
        }
      } catch (error) {
        setIsError(true);
        setError(error.response.data.status.message);
      }
    }
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
          <h1 className="title">Sign Up</h1>
          <div className="form">
            <Form noValidate validated={validated} onClick={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label className="label">Email address*</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  className="input"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  EmaiL Not vaild
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label className="label">Create Password *</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  Invaild Password{" "}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label className="label">Repeat Password *</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repeat Password"
                  className="input"
                  name="password_confirmation"
                  value={user.password_confirmation}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  Invaild Password{" "}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom04">
                <Form.Check
                  required
                  className="label"
                  type="checkbox"
                  label="I agree to the Terms of Service and Privacy Policy"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                className="button"
                onClick={handleSubmitClick}
              >
                Sign Up
              </Button>
              {isError && <CustomsAlert error={error} />}
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
        width: 60% .label {
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
        .button a {
          color: #fff;
          text-decoration: none;
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
          width: 80%;
          left: 5%;
        }
      }
      .container-modal {
        left: 56%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .signup {
      .signup-form {
        .title {
          top: 5%;
          left: 5%;
        }
        .form {
          width: 80%;
          left: 5%;
          top: 11%;
          .line {
            margin: 0px;
          }
        }
      }
    }
  }
`;

export default SignUp;
