import React, { Component } from "react";

class Text extends Component {
  state = {};

  renderMessage = () => {
    if (this.props.clickStatus) return <p>WHAT UP DOG?!</p>;
    else return <p>I'm sorry...</p>;
  };

  render() {
    return (
      <div>
        <h2>
          Click 'Yes' to See a Special Message:
          {this.renderMessage()}
        </h2>
      </div>
    );
  }
}

export default Text;
