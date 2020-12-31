import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  background: ${(props) => props.backgroundcolor};
  white-space: nowrap;
  padding: 1rem;
  margin: 0.5rem;
  flex: 1;
  text-align: right;
  float: left;

  :hover {
    opacity: 50%;
  }
`;

function SignButton({ name, link, backgroundcolor }) {
  return (
    <div>
      {" "}
      <StyledLink
        className="button"
        backgroundcolor={backgroundcolor}
        to={link}
      >
        {name}
      </StyledLink>
    </div>
  );
}

export default SignButton;
