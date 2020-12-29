import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SignButton from "./SignButton";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import UserProfile from "./UserProfile";

const StyledHeader = styled.div`
  width: 100%;
  padding: 1.2rem;
  position: relative;
  backdrop-filter: blur(1rem);
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
      showSignInPage: false,
      showSignUpPage: false,
    };
  }

  handleSignIn = () => {
    this.setState({ showSignInPage: !this.state.showSignInPage });
  };

  handleSignUp = () => {
    this.setState({ showSignUpPage: !this.state.showSignUpPage });
  };

  render() {
    let userStatus;
    if (this.state.isUserLoggedIn) {
      userStatus = <UserProfile />;
    } else {
      userStatus = (
        <>
          <SignButton
            name="Sign In"
            backgroundcolor="blue"
            onClick={this.handleSignIn}
          />
          <SignButton
            name="Create free acount"
            backgroundcolor="green"
            onClick={this.handleSignUp}
          />
          {this.state.showSignInPage ? (
            <SignInPage onClose={this.handleSignIn} />
          ) : null}
          {this.state.showSignUpPage ? (
            <SignUpPage onClose={this.handleSignUp} />
          ) : null}
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
