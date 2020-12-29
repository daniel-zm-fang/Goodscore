import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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

class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    let currentTime = new Date().getHours();
    let temp = "Good morning";
    if (12 <= currentTime && currentTime <= 17) {
      temp = "Good Afternoon";
    } else if (18 <= currentTime && currentTime <= 23) {
      temp = "Good evening";
    }
    this.state = {
      userName: "Daniel",
      message: temp,
    };
  }

  render() {
    const { userName, message } = this.state;
    return (
      <StyledWelcomeMessage>
        {message},<br />
        {userName}
      </StyledWelcomeMessage>
    );
  }
}

export default WelcomeMessage;
