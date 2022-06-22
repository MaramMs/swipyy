import React from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

const Cards = ({ src, title, text }) => {
  return (
    <Div>
      <div className="cards">
        <div className="container">
          <div className="card-content">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding: 100px 0px;
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
`;
export default Cards;
