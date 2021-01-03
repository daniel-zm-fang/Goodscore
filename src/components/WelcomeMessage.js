import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {useAuth} from "./AuthContext"
import {Jumbotron} from "react-bootstrap";

const fadein = keyframes`
    0% { top:25%; opacity: 0; } 
    100% { top: 30%; opacity: 1; } 
`;

const StyledWelcomeMessage = styled.h1`
  position: fixed;
  top: 30%;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: none;
  padding-left: 5rem;
  animation: ${fadein} 1s;
`;

function WelcomeMessage() {
  const { currUser } = useAuth();
  const [message, setMessage] = useState("Good morning, " + currUser.email);
  const changeMessage = (greeting) => setMessage(1);

  function showMessage() {
    let currentTime = new Date().getHours();
    if (12 <= currentTime && currentTime <= 17) {
    
    } else if (18 <= currentTime && currentTime <= 23) {
      
    }
    return <h1></h1>;
  }

  return (
      <Jumbotron>{showMessage}</Jumbotron>
  )
}

export default WelcomeMessage;
