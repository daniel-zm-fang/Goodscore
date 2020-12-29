import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  white-space: nowrap;
  font-size: 1.2rem;
  background: ${(props) => props.backgroundcolor};
  padding: 1rem;
  margin: 0.5rem;
  flex: 1;
  text-align: right;

  :hover {
    opacity: 50%;
  }
`;

class SignButton extends Component {
  render() {
    const { name, backgroundcolor } = this.props;
    return (
      <StyledButton
        className="button"
        backgroundcolor={backgroundcolor}
        onClick={this.props.onClick}
      >
        {name}
      </StyledButton>
    );
  }
}

export default SignButton;
