import React, { Component } from "react";
import Button from "../Components/Button";
import Card from "../Components/Card";
import Text from "../Components/Text";
import Toggle from "../Components/Toggle";
import "../CSS/style.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: "Hello Dan",
      isClicked: null
    };
  }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked }, () =>
      console.log(this.state.isClicked)
    );
  };

  render() {
    return (
      <div>
        <h1>HappyCard.com</h1>
        <Card>
          <Button changeClick={this.handleClick} />
          <Toggle handleClick={this.handleClick} />
          <Text text={this.state.mytext} clickStatus={this.state.isClicked} />
        </Card>
      </div>
    );
  }
}

export default Main;
