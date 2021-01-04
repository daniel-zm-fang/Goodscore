import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SignIn from "../auth/SignInPage";
import SignUp from "../auth/SignUpPage";
import UpdateProfile from "../auth/UpdateProfile";
import ForgotPassword from "../auth/ForgotPassword";
import { useAuth } from "../components/AuthContext";

function Header() {
  let content;
  const [showSignIn, setSignIn] = useState(false);
  const [showSignUp, setSignUp] = useState(false);
  const [showForgotPassword, setForgotPassword] = useState(false);
  const [showUpdateProfile, setUpdateProfile] = useState(false);
  const [shouldSwitch, setSwitch] = useState(0);
  const [error, setError] = useState("");
  const { currUser, logOut } = useAuth();
  const history = useHistory();
  const handleSignInClose = () => setSignIn(false);
  const handleSignInShow = () => setSignIn(true);
  const handleSignUpClose = () => setSignUp(false);
  const handleSignUpShow = () => setSignUp(true);
  const handleForgotPasswordClose = () => setForgotPassword(false);
  const handleForgotPasswordShow = () => setForgotPassword(true);
  const handleUpdateProfileClose = () => setUpdateProfile(false);
  const handleUpdateProfileShow = () => setUpdateProfile(true);
  const handleSwitch0 = () => setSwitch(0);
  const handleSwitch1 = () => setSwitch(1);
  const handleSwitch2 = () => setSwitch(2);

  useEffect(() => {
    if (shouldSwitch === 1) {
      if (showSignIn) {
        handleSignInClose();
        handleSignUpShow();
      } else {
        handleSignInShow();
        handleSignUpClose();
      }
    } else if (shouldSwitch === 2) {
      handleSignInClose();
      handleForgotPasswordShow();
    }
    handleSwitch0();
  }, [showSignIn, showSignUp, shouldSwitch]);

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  if (currUser) {
    content = (
      <>
        <Button onClick={handleUpdateProfileShow}>Update Profile</Button>
        <Button className="mx-2" onClick={handleLogout}>Sign Out</Button>
        <UpdateProfile
          show={showUpdateProfile}
          open={handleUpdateProfileShow}
          close={handleUpdateProfileClose}
        />
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
          switchToSignUp={handleSwitch1}
          switchToForgotPassword={handleSwitch2}
        />
        <SignUp
          show={showSignUp}
          open={handleSignUpShow}
          close={handleSignUpClose}
          switchToSignIn={handleSwitch1}
        />
        <ForgotPassword
          show={showForgotPassword}
          open={handleForgotPasswordShow}
          close={handleForgotPasswordClose}
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
