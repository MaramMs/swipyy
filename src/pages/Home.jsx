import React from "react";
import {
  Circle,
  Features,
  Video,
  Footer,
  Header,
  Navbar,
  Cards,
} from "../components";
import create from "../img/Other 07.svg";
const Home = () => {
  return (
      <div className="Home">
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
        <Features />
        <Video />
      </main>
      <Footer />
      </div>
  
 
  );
};
export default Home;
