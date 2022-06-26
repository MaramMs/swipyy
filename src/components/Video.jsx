import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Div>
      <div className="video">
        <div className="container">
          <video width="928" height="546" controls>
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

  @media (max-width: 575.98px) {
    .video{
      margin-top:80px;
      video{
        width:350px;
        height:200px;
      }
    }

  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    video{
      width:700px;
      height:300px;
    }
  ]
`;
export default Video;
