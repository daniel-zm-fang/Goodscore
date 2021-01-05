import React, { useState, useEffect } from "react";
import PracticeCard from "./Card";
import { Container, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards() {
  const [pieces, setPieces] = useState([]);
  let message = "Songs";
  if (pieces.length === 0) {
    message = "Add a piece to get started";
  }

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then(data => {
        setPieces(() => data)
      })
      .catch(err => {
        alert(err);
      })
  }, []);

  return (
    <Container fluid >
      <h3 className="mx-4">{message}</h3>
      <CardDeck className="m-2 justify-content-center">
        {pieces.map((piece, index) => (
          <PracticeCard piece={piece} key={index}/> 
        ))}
      </CardDeck>
      <Button className="m-4" as={Link} to="/explore" variant="outline-dark" size="lg">
        <b>+</b>
      </Button>
    </Container>
    );
}

export default Cards;
