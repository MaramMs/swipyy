import React from "react";
import { Alert } from "react-bootstrap";

const CustomsAlert = ({error}) => {
  console.log(error)
  return (
    <div>
      <Alert variant="danger"> 
         
             {error}
          </Alert> 
    
    
    </div>
  );
};

export default CustomsAlert;
