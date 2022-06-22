import React from "react";
import styled from "styled-components";

const Line = () => {
  return (
    <Div>
      <div className="line"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
      <div className="line5"></div>
      <div className="line6"></div>
    </Div>
  );
};

const Div = styled.div`
  .line {
    background-color: #6d2ee1;
    width: 242px;
    height: 13px;
    position: absolute;
    top: 81%;
    border-radius: 5px;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 6%;
  }

  .line2 {
    background-image: linear-gradient(#8055f0, #6d2ee1);
    width: 183px;
    height: 11px;
    position: absolute;
    top: 88%;
    border-radius: 5px;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    left: 13%;
  }
  .line3 {
    border-radius: 5px;
    background-color: #8cc8cc;
    width: 159px;
    height: 4px;
    position: absolute;
    top: 88%;
    left: 10%;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  .line4 {
    border-radius: 5px;
    background-color: #8cc8cc;
    width: 242px;
    height: 11px;
    position: absolute;
    top: 84%;
    right: 12%;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    transform: rotateZ(47deg);
  }

  .line5 {
    border-radius: 5px;
    background-image: linear-gradient(#8055f0, #6d2ee1);
    width: 242px;
    height: 11px;
    position: absolute;
    top: 90%;
    right: 7%;
    -webkit-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    transform: rotateZ(47deg);
  }
  .line6 {
    border-radius: 5px;
    background-image: linear-gradient(#8055f0, #6d2ee1);
    width: 115px;
    height: 2px;
    position: absolute;
    top: 95%;
    right: 12%;
    -webkit-transform: rotateZ(47deg);
    -ms-transform: rotateZ(47deg);
    transform: rotateZ(47deg);
  }
`;
export default Line;
