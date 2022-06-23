import React from 'react';
import styled from 'styled-components';

const Circle = () => {
  return (
    <Div>
   <div className="circle">

   </div>
    </Div>
  )
}

const Div = styled.div`
    width:500px;
    height:500px;
    border-radius:50%;
    background-image: linear-gradient(#dd81ff, #1238ff);
    position:abslout;
`;

export default Circle;