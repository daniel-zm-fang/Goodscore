import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

// userStatus = <Nav.Link as={Link} to="/home">Sign Out</Nav.Link>;
// <Nav.Link as={Link} to="/signin" onClick={handleShow}>Log in</Nav.Link>
// <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const handleSignInClose = () => setIsLoggedIn(false);
  const handleSignInShow = () => setIsLoggedIn(true);
  const handleSignUpClose = () => setSignUp(false);
  const handleSignUpShow = () => setSignUp(true);

  let status;
  if (isLoggedIn) {
    status = <>
    <Link to="\home">
        <Button variant="primary" onClick={handleSignInShow}>
          Sign Out
        </Button>
    </Link>
    </>
  } else {
    status = <>
        <Button variant="primary" onClick={handleSignInShow}>
          Sign In
        </Button>
        <Button variant="primary" onClick={handleSignUpShow}>
          Sign Up
        </Button>
        <SignIn logIn={isLoggedIn} open={handleSignInShow} close={handleSignInClose} />
        <SignUp signUp={isSignUp} open={handleSignUpShow} close={handleSignUpClose} />
        </>
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{ marginLeft: "1rem" }} as={Link} to="/home">
        Goodscore
      </Navbar.Brand>
      <Nav className="ml-auto" style={{ marginRight: "1rem" }}>
        {status}
      </Nav>
    </Navbar>
  );
}

export default Header;
