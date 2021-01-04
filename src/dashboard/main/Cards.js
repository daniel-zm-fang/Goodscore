import React, { Component } from "react";
import PracticeCard from "./Card";
import { Container, Button, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pieces: [],
    };
  }

  clickHandler = () => {
    alert(`Clicked`);
  };

  componentDidMount() {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          pieces: data,
        });
      });
  }

  render() {
    let emptyMsg;
    if (this.state.pieces.length === 0) {
      emptyMsg = <h3>Add a piece to get started</h3>;
    }
    return (
      <Container>
        {emptyMsg}
        <CardDeck className="mb-4">
          {this.state.pieces.map((piece, index) => (
            <PracticeCard piece={piece} key={index}/> 
          ))}
        </CardDeck>
        <Button as={Link} to="/explore" variant="outline-dark">
          <b>+</b>
        </Button>
      </Container>
    );
  }
}

export default Practice;
