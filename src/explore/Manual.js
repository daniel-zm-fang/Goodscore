import React, { useState, Link } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function Manual() {
  return (
    <Container className="mt-5">
      <Form action="/add" method="POST">
        <Form.Group controlId="pieceName">
          <Form.Label>Piece Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="composerName">
          <Form.Label>Composer</Form.Label>
          <Form.Control
            name="composer"
            type="text"
            placeholder="Enter composer"
          />
        </Form.Group>
        <Button as={Link} to="/dashboard" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
