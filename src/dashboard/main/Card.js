import React from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";

export default function PracticeCard({ piece }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{piece.name}</Card.Title>
        <Card.Text>Composed by: {piece.composer}</Card.Text>
        <ProgressBar
          variant="dark"
          className="mb-3"
          now={piece.progress}
          label={`${piece.progress}%`}
        />
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
