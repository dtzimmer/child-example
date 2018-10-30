import React, { Component } from "react";

class Button extends Component {
  handleClickTrue = e => {
    e.preventDefault();
    this.props.changeClick(e, "true");
  };

  handleClickFalse = e => {
    e.preventDefault();
    this.props.changeClick(e, "false");
  };

  render() {
    return (
      <div>
        <button onClick={e => this.handleClickTrue(e)}>YES</button>
        <button onClick={e => this.handleClickFalse(e)}>NO</button>
      </div>
    );
  }
}

export default Button;
