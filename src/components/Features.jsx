import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import works from "../img/Group 20.svg";
import details from "../img/Group 21.svg";
import links from "../img/Group 27.svg";

const Features = () => {
  return (
    <Div>
      <div className="featuers">
        <Container>
          <Row xs={1} md={2} >
            <Col>
              <img src={works} alt="" />
            </Col>
            <Col>
              <div className="feature-info">
                <h2 className="feature-title">Works Anywhere</h2>
                <p className="feature-desc">
                  Share your link on any social or digital platform: Instagram,
                  YouTube, Facebook or TikTok, in messengers or via SMS.
                </p>
              </div>
            </Col>
          </Row>

          <Row xs={1} md={2} className="meduim">
            <Col>
              <div className="feature-info details">
                <h2 className="feature-title">Get detailed social analytics</h2>
                <p className="feature-desc">
                  Identify, organize and manage your audience on social media.
                </p>
              </div>
            </Col>
            <Col>
              <img src={details} alt="" />
            </Col>
          </Row>
          <Row xs={1} md={2} >
            <Col>
              <img src={links} alt="" />
            </Col>
            <Col>
              <div className="feature-info">
                <h2 className="feature-title">Manage your links as you wish</h2>
                <p className="feature-desc">
                  Optimize your links. HeyLink.me allows you to connect any
                  links and effectively manage your audience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="circle"></div>
        <div className="circle2"></div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .featuers {
    position: relative;
    img {
      width: 100%;
      max-width: 100%;
    }
    .feature-info {
      position: relative;
      top: 32%;
      .feature-title {
        color: #8055f0;
        font-size: 25px;
        font-weight: 700;
        font-family: "Montserrat";
        font-style: normal;
        text-transform: capitalize;
      }
      &:before {
        content: "";
        width: 83px;
        height: 8px;
        background-color: #8cc8cc;
        border-radius: 5px;
        position: absolute;
        transform: rotateZ(45deg);
        left: -9%;
        top: -23%;
      }
      &:after {
        content: "";
        width: 83px;
        height: 8px;
        background-color: #efefef;
        border-radius: 5px;
        position: absolute;
        transform: rotateZ(45deg);
        left: -3%;
        top: -6%;
        z-index: -1;
      }
    }
    .feature-desc {
      width: 63%;
      line-height: 2;
      margin-top: 20px;
      color: #163152;
      text-transform: capitalize;
    }
  }
  .feature-info.details {
    margin-left: 17%;
    .feature-title {
      color: #8cc8cc;
    }
    &:before {
      content: "";
      background-color: #8055f0;
    }
}
    .circle {
      position: absolute;
      top: -2%;
      right: 12%;
      background: #d799ff;
      border-radius: 100%;
      height: 120px;
      width: 120px;
      margin: 0;
      background: radial-gradient(circle at 100px 100px, #d799ff, #1238ff);
    }
    .circle2 {
        position: absolute;
        top: 53%;
        left: -8%;
        background: #d799ff;
        border-radius: 100%;
        height: 252px;
        width: 252px;
        margin: 0;
        background: radial-gradient(circle at 100px 100px, #d799ff, #1238ff);
      }
  }
  @media  (max-width: 575.98px) {
    .row.meduim{
      flex-direction: column-reverse;
}  
.featuers .feature-info{
left:16%;
margin:0;
&:before{
  left:-14%;
}
.feature-title{
  font-size:23px;
}
.feature-desc{
  width:80%;
}
    }
    .circle2 {
      width:100px;
      height:100px;
      left:-15%;
    }
    .circle{
      width:50px;
      height:50px;
    }
   
  }
 @media (min-width: 768px) and (max-width: 991.98px) {
  .featuers .feature-info{
    &:before{
      left:-16%

    }
    .feature-desc{
      width:100%
          }
  }
    
     .circle{
width:50px;
height:50px;
    }
     .circle2{
width:100px;
height:100px;
    }
  }
`;
export default Features;
