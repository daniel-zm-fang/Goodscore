// import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import SignIn from "./SignIn";
// import { useAuth } from "./AuthContext";

function SignUp({ signUp, open, close }) {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  // const { signup } = useAuth();

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   signup(emailRef.current.value, passwordRef.current.value);
  // }
  return (
    <Modal show={signUp} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="signBox">
          <form>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
            <Link to="/home/">
              <input
                class="signButton"
                type="submit"
                value="Sign up"
                onClick={close}
              />
            </Link>
            <hr />
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUp;
