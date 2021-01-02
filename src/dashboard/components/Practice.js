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

  componentDidMount() {
    fetch("/test")
      .then(res => res.json())
      .then(data => {
        
      })
  }

  render() {
    return (
      <div className="notHome">
        Practice<button onClick={this.clickHandler}>Begin</button>
      </div>
    );
  }
}

export default Practice;
