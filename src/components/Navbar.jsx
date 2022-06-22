import React from "react";
import styled from "styled-components";
import logo from "../img/8.svg";

const Navbar = () => {
  return (
    <Div>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul className="list">
                <li className="active">Home</li>
                <li>Our Services</li>
                <li>About Us</li>
                <li>Dashboard</li>
              </ul>

              <button className="btn-free">Start For Free</button>
              <button className="btn-lan">ع</button>
            </nav>
          </div>
        </div>
        <div className="colour"></div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .navbar {
    background-color: #8055f0;
    .navbar-container {
      width: 56%;
      margin: auto;
      .navbar-content {
        display: flex;
        justify-content: space-center;
        gap: 100px;
        align-items: center;
        .navbar-logo img {
          width: 50%;
          max-width: 100%;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          .list {
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
    }
  }
`;
export default Navbar;
