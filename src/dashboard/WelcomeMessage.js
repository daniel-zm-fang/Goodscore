import React, { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { Jumbotron } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    0% {  opacity: 0; } 
    100% {  opacity: 1; } 
`;

const StyledJumbotron = styled(Jumbotron)`
  color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;

const StyledWelcomeMessage = styled.h2`
  animation: ${fadein} 1.5s;
  margin: 0 0 0 5rem;
`;

function WelcomeMessage() {
  const { currUser } = useAuth();
  const [message, setMessage] = useState("Good morning, ");
  const [background, setBackground] = useState("morning");
  const changeMessage = (greeting) => setMessage(greeting);
  const changeBackground = (background) => setBackground(background);

  useEffect(() => {
    let currentTime = new Date().getHours();
    if (12 <= currentTime && currentTime <= 17) {
      changeMessage("Good afternoon, ");
      changeBackground("afternoon");
    } else if (18 <= currentTime && currentTime <= 23) {
      changeMessage("Good evening, ");
      changeBackground("evening");
    }
  });

  return (
    <StyledJumbotron fluid className={background}>
      <StyledWelcomeMessage>
        {message}
        <br />
        {currUser.email}
      </StyledWelcomeMessage>
    </StyledJumbotron>
  );
}

export default WelcomeMessage;
