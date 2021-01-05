import React, { useState, Link } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Manual() {
  return (
    <Container className="mt-5">
      <h3>Add a new piece</h3>
      <Form className="mt-4" action="/add" method="POST">
        <Form.Group controlId="pieceName">
          <Form.Label>Piece Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter the piece name" required />
        </Form.Group>
        <Form.Group controlId="composerName">
          <Form.Label>Composer</Form.Label>
          <Form.Control
            name="composer"
            type="text"
            placeholder="Enter the composer's name"
            required
          />
        </Form.Group>
        <Button as={Link} to="/dashboard" variant="dark" type="submit">
          Add
        </Button>
        <Button className="justify-content-end" as={Link} to="/dashboard" variant="dark">
          Cancel
      </Button>
      </Form>
    </Container>
  );
}

export default Manual;