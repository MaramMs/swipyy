import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import create from "../img/Other 07.svg";
import styled from "styled-components";
import Line from "../components/Line";

const Home = () => {
  return (
    <Div>
      <Navbar />
      <Header />
      <main>
        <div className="container">
          <h1 className="title">The One Link To Rule Them All</h1>
          <Cards
            src={create}
            title="create"
            text="Easily create & manage all your
               links in one place: personal website,
                store, recent video or social post."
          />
          <Line />
        </div>
      </main>
    </Div>
  );
};
const Div = styled.div`
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
`;
export default Home;
