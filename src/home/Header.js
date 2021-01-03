import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SignIn from "../auth/SignInPage";
import SignUp from "../auth/SignUpPage";
import { useAuth } from "../components/AuthContext";

function Header() {
  let content;
  const [showSignIn, setSignIn] = useState(false);
  const [showSignUp, setSignUp] = useState(false);
  const [shouldSwitch, setSwitch] = useState(false);
  const [error, setError] = useState("");
  const { currUser, logOut } = useAuth();
  const history = useHistory();
  const handleSignInClose = () => setSignIn(false);
  const handleSignInShow = () => setSignIn(true);
  const handleSignUpClose = () => setSignUp(false);
  const handleSignUpShow = () => setSignUp(true);
  const handleSwitchTrue = () => setSwitch(true);
  const handleSwitchFalse = () => setSwitch(false);

  useEffect(() => {
    if (shouldSwitch) {
      if (showSignIn) {
        handleSignInClose();
        handleSignUpShow();
      } else {
        handleSignInShow();
        handleSignUpClose();
      }
      handleSwitchFalse();
    }
  }, [showSignIn, showSignUp, shouldSwitch]);

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      history.push("/home");
    } catch {
      setError("Failed to log out");
    }
  }

  if (currUser) {
    content = (
      <>
        <h1>{currUser.email}</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button className="mx-2" as={Link} to="/updateProfile">
          Update Profile
        </Button>
        <Button onClick={handleLogout}>Sign Out</Button>
      </>
    );
  } else {
    content = (
      <>
        <Button className="mx-2" onClick={handleSignInShow}>
          Sign In
        </Button>
        <Button className=" btn-success" onClick={handleSignUpShow}>
          Sign Up
        </Button>
        <SignIn
          show={showSignIn}
          open={handleSignInShow}
          close={handleSignInClose}
          shouldSwitch={handleSwitchTrue}
        />
        <SignUp
          show={showSignUp}
          open={handleSignUpShow}
          close={handleSignUpClose}
          shouldSwitch={handleSwitchTrue}
        />
      </>
    );
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        className="mx-3"
        as={Link}
        to={() => {
          return currUser ? "/dashboard" : "/home";
        }}
      >
        Goodscore
      </Navbar.Brand>
      <Nav className="ml-auto">{content}</Nav>
    </Navbar>
  );
}

export default Header;
