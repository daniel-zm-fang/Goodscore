import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  background: ${(props) => props.backgroundcolor};
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 30%;
  height: 3rem;
  transition: width 0.5s, height 0.5s, font-size 0.5s;

  :hover {
    width: 50%;
    height: 4rem;
    font-size: 1.5rem;
  }
`;

function Bookmark({ name, link, backgroundcolor }) {
  return (
    <StyledLink className="button" backgroundcolor={backgroundcolor} to={link}>
      {name}
    </StyledLink>
  );
}

export default Bookmark;
