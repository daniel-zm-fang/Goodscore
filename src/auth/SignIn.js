import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function SignIn({ logIn, open, close, submit }) {
  return (
    <Modal show={logIn} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
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
            <Link to="/dashboard">
              <input
                class="signButton"
                type="submit"
                value="Sign in"
                onClick={() => {
                  close();
                  submit();
                }}
              />
            </Link>
            <hr />
            Forget password?
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
