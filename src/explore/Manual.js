import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { addSong } from "../firebase";

function Manual() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(
      "rootM2R69HAi6ztTon1o",
      event.target.name.value,
      event.target.composer.value,
      event.target.progress.value
    );
    history.push("/dashboard");
  };

  const displayProgress = (event) => {
    document.getElementById("progressDisplay").value = event.target.value;
  };

  return (
    <Container className="mx-5">
      <h3 className="my-5">Add a new sheet music</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Piece Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter the piece name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Composer</Form.Label>
          <Form.Control
            name="composer"
            type="text"
            placeholder="Enter the composer's name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Progress</Form.Label>
          <Form.Control
            id="progress"
            name="progress"
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            onInput={displayProgress}
            required
          />
          <output id="progressDisplay">0</output>
        </Form.Group>
        <input
          className="btn btn-outline-dark"
          variant="dark"
          type="submit"
          value="Add"
        />
        <Button
          style={{ float: "right" }}
          as={Link}
          to="/dashboard"
          variant="outline-dark"
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default Manual;
