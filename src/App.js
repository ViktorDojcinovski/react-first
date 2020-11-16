import React, { Component } from "react";

import HelloWorld from "./HelloWorld.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: "7 billion",
      men: "3.5 billion",
      children: "",
    };

    this.getChildren = this.getChildren.bind(this);
  }

  getChildren(children) {
    console.log("There are " + children + " children in the world");
    this.setState({ children: children });
  }

  render() {
    return (
      <>
        <HelloWorld
          people={this.state.people}
          men={this.state.men}
          getChildren={this.getChildren}
        />
      </>
    );
  }
}

export default App;
