import React, { Component } from "react";
import PracticeCard from "./PracticeCard";

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
    return this.state.pieces.map((piece) => <PracticeCard piece={piece} />);
  }
}

export default Practice;
