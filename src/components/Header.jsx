import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import vector1 from "../img/Vector.svg";
import vector2 from "../img/Vector 2.svg";
import girl from "../img/girl2.png";
import girlbottom from "../img/girl.png";
import facebook from "../img/Facebook.svg";
import inst from "../img/Instagram.svg";
import tiktok from "../img/Tiktok.svg";
import whatsapp from "../img/Whatsapp.svg";
import youtube from "../img/YoutubeOctDenoiserBeauty_001 copy.svg";
import snapchat from "../img/Snapchat.svg";
import twitter from "../img/Twitter.svg";

const Header = () => {
  return (
    <Div>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="header-info">
              <span>let's create!</span>
              <h1>
                Just one link <br /> for everything
              </h1>
              <p>Place all your necessary links in one location.</p>
              <div>
                <button className="btn-free">
                  <Link to="/signup">start for free</Link>
                </button>
                <button className="btn-account">
                  <Link to="signin">Already Have Account</Link>
                </button>
              </div>
              <span className="link-me">
                Already on HeyLink.me?{" "}
                <button>
                  <Link to="/signin">Log In</Link>
                </button>
              </span>
            </div>
            <div className="header-img">
              {/* <img src={girl123} alt="" /> */}
              <div className="vector1">
                <img src={vector1} alt="vector" />
              </div>
              <div className="vector2">
                <img src={vector2} alt="vector" />
              </div>
              <div className="img-girl">
                <img src={girl} alt="" className="top-girl" />
                <img src={girlbottom} alt="" className="bottom-girl" />
              </div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
              <div className="lin1"></div>
              <div className="lin2"></div>
              <div className="social">
                <img src={facebook} alt="facebook" className="face" />
                <img src={inst} alt="facebook" className="inst" />
                <img src={tiktok} alt="facebook" className="tik" />
                <img src={youtube} alt="facebook" className="youtube" />
                <img src={whatsapp} alt="facebook" className="whats" />
                <img src={snapchat} alt="facebook" className="snap" />
                <img src={twitter} alt="facebook" className="twitter" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Div>
  );
};

const Div = styled.div`
header{

    background-color:#8055F0;
    width:100%;
    height:600px;
    clip-path: ellipse(300% 100% at 157.5% 0%);
.container{
    .header-content{
        display:flex;
        justify-content:space-around;
        padding-top:80px;
        .header-info{
            display:flex;
            flex-direction:column;
            span:first-child  {
                color:#fff;
                text-transform: uppercase;
                font-size:16px;
                font-weight:bold;
              }
              h1{
                color:#fff;
                font-size:52px;
                font-weight:bold;
                line-height:1.6

              }
              p{
                color:#fff;
                font-size:17px;
              }
.btn-free{
    border:none;
    padding:10px;
    color:#fff;
    background-color:#8CC8CC;
    text-transform:uppercase;
    border-radius:5px;
    font-size:14px;
    width:190px;
    a {
      color: #fff;
      text-decoration: none;
    }
}
.btn-account{
    border:none;  
     padding:10px;
    color:#8CC8CC;
    background-color:#fff;
    border-radius:5px;
    font-size:14px;
    width:209px;
    margin-left:10px;
    a{
      text-decoration: none;
color:#8CC8CC;
    }
}
.link-me{
    color:#fff;
    font-size:12px;
    margin-top:25px;
    button{
        border:none;
        background-color:transparent;
        color:#fff;
        font-size:12px;
        a{
          text-decoration: none;
color:#fff;
        }
    }
}

        }
        .header-img{
          position:relative;
    margin-top: 141px;
    margin-right: 92px;
        .vector2{
            position: absolute;
            top: -14%;
            left: 7%
        }
        .top-girl{
            position: absolute;
             top: -76%;
            left: 13%;
        }
        .bottom-girl{
            position: absolute;
            top: -55%;
            left: 13%;
        }
        .circle1{
            position: absolute;
            width: 50px;
            
            background-color: #fff;
            border-radius: 50%;
            top: 63%;
            left: -4%;
         
            height: 50px
        }
        .circle2{
            background-color: #6D2EE1;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: -36%;
    right: 2%
        }
        .circle3{
            background-color: #6D2EE1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
bottom: 0%;
    right: 22%
        }
        .circle4{
            background-color: #8CC8CC;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -27%;
    left: 40%
        }
     
        }
        .lin1{
            bottom: -2%;
            left: 17%;
            position: absolute;
            width: 150px;
            height: 100px;
            border: solid 5px #fff;
            border-color: transparent transparent #fff transparent;
            border-radius: 0 0 284px 167%/170px;
            transform: rotateZ(22deg);
        }
        .lin2{
            top: 24%;
            left: -10%;
            position: absolute;
            width: 150px;
            height: 100px;
            border: solid 5px #fff;
            border-color: transparent transparent #fff transparent;
            border-radius: 0 0 284px 167%/170px;
            -webkit-transform: rotateZ(22deg);
            -ms-transform: rotateZ(22deg);
            transform: rotateZ(86deg)
        }
}   
.social{
  width: 200px;
  height: 200px;
  top: -55%;
  position: absolute;
  left: -11%;
  .face{
    position: absolute;
    bottom:10%;
    left:21%;
  }
  .tik{
    position: absolute;
    top: -8%;
    left: 21%
  }
  .snap
  {
    position: absolute;
    left: 0%;
    top: 36%
  }
  .youtube{
    position:absolute;
    top:13%;
    left:0%
  }
  .inst{
    position: absolute;
    bottom: 10%;
    right: 15%
  }  
  .twitter{
    position:absolute;
    top:40%;
    right:22%
  } 
  .whats{
    position: absolute;
    top: 41%;
    left: 29%
  }
}

    }

    @media (max-width: 575.98px) {
      .header-img{
        display:none;
      }   
      .container .header-content .header-info .btn-account{
        width:181px;
      }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
.container{
  .header-content{
    .header-info{
      h1{
        font-size:35px;
      }
      p{
        font-size:13px;
      }
      .btn-account{
        margin:10px 0px;
        width:190px;
      }
    }
    .header-img{
      margin-right:0px;
    }
   }
   .social{
    width: 164px;
    height: 192px;
    top: -55%;
    position: absolute;
    left: 3%
  }
}

    }
    
    `;

export default Header;
