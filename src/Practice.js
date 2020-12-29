import React, { Component } from "react";

class Practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPracticing: false,
    };
  }

  clickHandler = () => {
    alert(`Clicked`);
  };

  render() {
    return (
      <div className="notHome">
        Practice<button onClick={this.clickHandler}>Begin</button>
      </div>
    );
  }
}

export default Practice;
