import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Div>
      <div className="video">
        <div className="container">
          <video width="800" height="300" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto 80px auto;
  }
`;
export default Video;
