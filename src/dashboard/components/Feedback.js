import React, { Component } from "react";

class Feedback extends Component {
  render() {
    return (
      <div className="notHome">
        Feedback
        <form>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Feedback;
