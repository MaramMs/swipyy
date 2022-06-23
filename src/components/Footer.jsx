import React from "react";
import styled from "styled-components";
import logo from "../img/8.svg";
import footer from '../img/Atom_3_-_Octa0005 1.svg';
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Div>
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="info">
              <div className="footer-info">
                <img src={logo} alt="logo" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus semper rutrum sed tortor. Leo id tristique aliquam.
                </p>
              </div>

              <div className="social-info">
                <h3>Get Social With Us</h3>
                <div className="social-icon">
                  <span>
                    <FaWhatsapp className="icon" />
                  </span>
                  <span>
                    <FaTelegramPlane className="icon" />
                  </span>
                  <span>
                    <FaInstagram className="icon" />
                  </span>
                  <span>
                    <FaTwitter className="icon" />
                  </span>
                  <span>
                    <FaYoutube className="icon" />
                  </span>
                </div>
              </div>
            </div>
            <p className="copy">© swipyy.com – swippy Company.
             </p>

             <img src={footer} alt=""  className="footer-img"/>
             <div className="circle"></div>
          </div>
        </div>
      </footer>
    </Div>
  );
};

const Div = styled.div`
  footer {
    background-color: #8055f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;

    margin-top: 18px;
    .footer-content {
      padding: 30px 0px;

      .info {
        display: flex;
        border-bottom: 1px solid rgba(255, 255, 255, 0.34);

        .footer-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          img {
            width: 30%;
            max-width: 100%;
          }
          &:before {
            content: "";
            width: 140px;
            height: 11px;
            background-color: #6d2ee1;
            border-radius: 5px;
            position: absolute;
            transform: rotateZ(45deg);
            left: -20%;
            top: -18%;
          }
          &:after {
            content: "";
            width: 83px;
            height: 8px;
            background-color: #8cc8cc;
            border-radius: 5px;
            position: absolute;
            transform: rotateZ(45deg);
            left: -14%;
            top: -21%;
          }
          p {
            color: #fff;
            font-size: 15px;
            width: 50%;
            margin-top: 13px;
          }
        }
      }
      .social-info {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h3 {
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
        .social-icon {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          span {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            .icon {
              font-size: 25px;
              color: #fff;
              margin: 7px;
              text-align: center;
            }
          }
        }
      }
      .footer-img{
        position: absolute;
        bottom: 0%;
        right: 0%
      }
      .circle{
        position: absolute;
        bottom:0%;
        left: -3%;
        background: #d799ff;
        border-radius: 100%;
        height: 100px;
        width: 100px;
        margin: 0;
        background: radial-gradient(circle at 100px 100px, #d799ff, #1238ff);
      }
      .copy{
        text-align:center;
        color:#fff;
        font-size:12px;
        padding-top:10px;
      }
    }
  }
`;
export default Footer;
