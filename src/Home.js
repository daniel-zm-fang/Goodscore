import React, { Component } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import styled from "styled-components";

const StyledHome = styled.div``;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <WelcomeMessage />
      </StyledHome>
    );
  }
}

export default Home;
