import React, { Component } from "react";

type Props = {
  children: ReactNode
};

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="myCard">
        <h1>Happy Card</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
