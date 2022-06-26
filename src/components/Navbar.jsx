import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/8.svg";

const CustomsNavbar = () => {
  return (
    <Div>
      <Navbar expand="lg">
        <Container>
          <div className="navbar-content">
            <Navbar.Brand href="#home">
              <Link to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Our Services</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Dashboard</Nav.Link>
              </Nav>
              <button className="btn-free">
                <Link to="signup">Start For Free</Link>
              </button>
              <button className="btn-lan">ع</button>
            </Navbar.Collapse>
          </div>
        </Container>
        <div className="colour"></div>
      </Navbar>
    </Div>
  );
};

const Div = styled.div`
  .navbar {
    background-color: #8055f0;
    .navbar-content {
      margin: auto;
      display: flex;
      justify-content: space-between;
      gap: 190px;
      align-items: center;
      .logo {
        width: 50%;
        max-width: 100%;
      }
      .me-auto {
        font-size: 14px;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        .list {
          width: 400px;
          margin: 0;
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: space-between;
        }
        .list li {
          list-style: none;
          color: #d2d2d2;
          font-size: 14px;
        }
      }
      &:active {
        color: #fff;
      }
      .btn-free {
        border: none;
        border-radius: 5px;
        background-color: #fff;
        color: #8055f0;
        padding: 10px;
        text-align: center;
        width: 157px;
        margin-left: 29px;
        a {
          color: #8055f0;
          text-decoration: none;
        }
      }

      .btn-lan {
        width: 50px;
        height: 40px;
        border: none;
        background-color: #163152;
        color: #fff;
        border-radius: 5px;
        margin-left: 20px;
        text-align: center;
      }
    }
  }
  .colour {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: linear-gradient(#dd81ff, #1238ff);
    position: absolute;
    left: -3%;
    top: -52%;
    z-index: 1;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #d2d2d2;
  }

  @media (max-width: 575.98px) {
   .navbar .navbar-content{
      display:block;
      .logo{
        width:40%;
      }
      .btn-free{
        margin-left:0px;
      }
    }
    .navbar-light .navbar-toggler {
      margin-left:35%;
    }

 .navbar .colour{
    top:-6%;
    left:-24%;
  }
}

  @media (min-width: 768px) and (max-width: 991.98px) {
    .navbar .navbar-content{
      display:block;
      margin:0;
      width:100%;
      .logo{
        width:30%;
      }
      .btn-free{
        margin-left:0px;
      }
    }
    .navbar-light .navbar-toggler {
      margin-left:35%;
    }
  }
  .colour{
    width:100px;
    height:100px;
    top:-6%;
    left:-8%;
  }
  }
`;
export default CustomsNavbar;
