import React, { useRef, useState } from "react";
import { Alert, Form, Button, Modal } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { useHistory } from "react-router-dom";

function SignInPage({ show, open, close, shouldSwitch }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      close();
      history.push("/dashboard");
    } catch {
      setError("Failed to sign in");
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
        <Modal.Title>Sign In</Modal.Title>
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
          <Button className="w-100" type="submit" disabled={loading}>
            Sign In
          </Button>
        </Form>
        <p onClick={shouldSwitch}>Need an account? Sign Up</p>
      </Modal.Body>
    </Modal>
  );
}

export default SignInPage;
