import React, { useRef, useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import { useAuth } from "../components/AuthContext";
import { useHistory } from "react-router-dom";

export default function UpdateProfile({ show, open, close }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currUser.email) {
      alert("diff email");
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      alert("diff password");
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
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
        <Modal.Title>Update Profile</Modal.Title>
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
              defaultValue={currUser.email}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Control
              type="password"
              placeholder="Password, leave blank to keep the same"
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
              placeholder="Confirm password, leave blank to keep the same"
            />
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
