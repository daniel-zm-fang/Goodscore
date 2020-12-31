import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignButton from "./SignButton";
import UserProfile from "./UserProfile";

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 1.2rem;
  background-color: white;
`;

const StyledTitle = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 3rem;
  display: flex;
  top: 0;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
    };
  }

  render() {
    let userStatus;
    if (this.state.isUserLoggedIn) {
      userStatus = <UserProfile />;
    } else {
      userStatus = (
        <>
          <SignButton name="Sign In" backgroundcolor="blue" link="/signin" />
          <SignButton
            name="Create free acount"
            backgroundcolor="green"
            link="/signout"
          />
        </>
      );
    }

    return (
      <StyledHeader>
        <StyledTitle to={"/home"}>Goodscore</StyledTitle>
        <StyledButtonWrapper>{userStatus}</StyledButtonWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
