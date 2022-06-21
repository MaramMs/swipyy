import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { BsPatchCheck } from "react-icons/bs";

const CustomModal = ({text,path}) => {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            <BsPatchCheck className="icon" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="btn-done" >
            <Link to={path} >Done</Link>
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </ModalContainer>
  );
};
const ModalContainer = styled.div`
  .modal-dialog {
    position: absolute;
    top: 17%;
    left: 37%
  }
  .modal-content {
    padding: 18px;
    width: 551px;
    height: 487px;
    max-width: 100%;
    .modal-header {
      justify-content: center;
      border: none;
    }
    .modal-body{
      color: #163152;
      font-size: 20px;
      text-align: center;
      width: 69%;
      margin: auto;
      flex:none;
    }
    .modal-footer {
      border: none;
     
    }
    .modal-footer>button{
      width: 100%;
      background-color:#8055F0;
      padding:10px;
    }
      .icon {
        font-size: 13rem;
        color: #8055f0;
      }
    }
    .btn-done a{
      color: #fff;
  text-decoration: none;
    }
  }
`;

export default CustomModal;
