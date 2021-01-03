import React, { useRef, useState } from "react";
import { Alert, Form, Button, Modal } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { useHistory } from "react-router-dom";

function SignUpPage({ show, open, close, shouldSwitch }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      close();
      setTimeout(() => {
        history.push("/dashboard");
      }, 500);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Modal
      show={show}
      onHide={() => {
        close();
        setError("");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group id="passwordConfirm">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              ref={passwordConfirmRef}
              required
            />
          </Form.Group>
          <Button className="w-100" type="submit" disabled={loading}>
            Sign Up
          </Button>
        </Form>
        <p onClick={shouldSwitch}>Already have an account? Sign In</p>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpPage;
