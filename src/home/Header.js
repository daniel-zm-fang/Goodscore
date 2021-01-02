import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const handleSignInClose = () => setIsLoggedIn(false);
  const handleSignInShow = () => setIsLoggedIn(true);
  const handleSignUpClose = () => setSignUp(false);
  const handleSignUpShow = () => setSignUp(true);
  const handleSubmitTrue = () => setSubmit(true);
  const handleSubmitFalse = () => setSubmit(false);

  let status;
  if (!isLoggedIn && isSubmit) {
    status = (
      <>
        <Button onClick={handleSubmitFalse} as={Link} to="/home">
          Sign Out
        </Button>
      </>
    );
  } else {
    status = (
      <>
        <Button className="mx-2" onClick={handleSignInShow}>
          Sign In
        </Button>
        <Button className=" btn-success" onClick={handleSignUpShow}>
          Sign Up
        </Button>
        <SignIn
          logIn={isLoggedIn}
          open={handleSignInShow}
          close={handleSignInClose}
          submit={handleSubmitTrue}
        />
        <SignUp
          signUp={isSignUp}
          open={handleSignUpShow}
          close={handleSignUpClose}
        />
      </>
    );
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mx-3" as={Link} to="/home">
        Goodscore
      </Navbar.Brand>
      <Nav className="ml-auto" style={{ marginRight: "1rem" }}>
        {status}
      </Nav>
    </Navbar>
  );
}

export default Header;
