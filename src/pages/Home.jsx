import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import create from "../img/Other 07.svg";
import styled from "styled-components";
import Circle from '../components/Circle'
const Home = () => {
  return (
    <Div>
      <Navbar />
      <Header />
      <main>
        <div className="container">
          <Cards
            src={create}
            title="create"
            text="Easily create & manage all your
               links in one place: personal website,
                store, recent video or social post."
          />
        </div>
      </main>
    </Div>
  );
};
const Div = styled.div`

`;
export default Home;
