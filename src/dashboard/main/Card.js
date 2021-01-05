import React from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";

export default function PracticeCard({ piece }) {
  return (
    <Card className="m-2 col-sm-1" style={{ minWidth: "25%"}}>
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
