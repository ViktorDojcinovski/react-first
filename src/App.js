import React, { Component } from "react";

import HelloWorld from "./HelloWorld.component";
import GoodBye from "./GoodBye.component";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: "7 billion",
      men: "3.5 billion",
      children: "",
      showGoodBye: true,
    };

    this.getChildren = this.getChildren.bind(this);
    this.removeGoodBye = this.removeGoodBye.bind(this);
  }

  getChildren(children) {
    console.log("There are " + children + " children in the world");
    this.setState({ children: children });
  }

  removeGoodBye() {
    this.setState({ showGoodBye: false });
  }

  render() {
    return (
      <div className="container">
        <a href="https://google.com">Google</a>
        <HelloWorld
          people={this.state.people}
          men={this.state.men}
          getChildren={this.getChildren}
          removeGoodBye={this.removeGoodBye}
        />
        {this.state.showGoodBye && (
          <>
            <GoodBye>This is GoodBye component!</GoodBye>
          </>
        )}
      </div>
    );
  }
}

export default App;
