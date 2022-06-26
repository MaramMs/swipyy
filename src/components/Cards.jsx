import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Line from "./Line";

const Cards = ({ src, title, text }) => {
  return (
    <Div>
      <div className="cards">
        <div className="container">
          <h1 className="title">The One Link To Rule Them All</h1>
          <Row xs={1} md={2} lg={4} className="g-4 card-content">
            <Col>
              <Card >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="circle"></div>
          <Line />
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding: 100px 0px;
  .cards {
    position: relative;
    padding-bottom: 50px;
  }
  .title {
    text-align: center;
    font-weight: bold;
    color: #163152;
    padding: 50px 0px;
    position: relative;
    &:before {
      content: "";
      width: 54px;
      height: 6px;
      background-color: #8cc8cc;
      position: absolute;
      top: 46%;
      left: 26%;
      border-radius: 5px;
      transform: rotateZ(45deg);
      z-index: -1;
    }
    &:after {
      content: "";
      width: 80px;
      height: 15px;
      background-color: #8cc8cc;
      position: absolute;
      top: 47%;
      right: 25%;
      border-radius: 5px;
      -webkit-transform: rotateZ(45deg);
      -ms-transform: rotateZ(45deg);
      transform: rotateZ(54deg);
      z-index: -1;
    }
  }
  .card-content {
    display: flex;
    justify-content: space-between;
    text-align: center;
    .card {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border-color: #fff;
      border-radius: 10px;
      padding: 23px;
      .card-img-top {
        width: 229px;
        height: 200px;
        max-width: 100%;
        margin: auto;
      }
      .card-title {
        color: #8055f0;
        font-size: 18px;
      }
      .card-body {
        color: #bfbfbf;
        font-size: 15px;
      }
    }
  }
  .circle {
    position: absolute;
    top: -48%;
    right: -21%;
    background: #d799ff;
    border-radius: 100%;
    height: 225px;
    width: 225px;
    margin: 0;
    background: radial-gradient(circle at 100px 100px, #d799ff, #1238ff);
  }
  @media (max-width: 575.98px) {
    .title {
      font-size: 17px;

      &:before {
        left: 6%;
      }
      &:after {
        right: 2%;
      }
    }
    .line,
    .line2,
    .line3,
    .line4,
    .line5,
    .line6 {
      display: none;
    }
    .circle{
      top: -18%;
    right: -36%
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .title {
  
      &:before {
        left: 11%;
      }
      &:after {
        right: 9%;
      }
    }
    .line,
    .line2,
    .line3,
    .line4,
    .line5,
    .line6 {
      display: none;
    }
    .circle{
      top:-23%;
      right:-28%;

    }
  }
`;
export default Cards;
