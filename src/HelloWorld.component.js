import React from "react";
// Other way for importing Component
// import { Component } from "react"

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      women: "3.6 billion",
    };
  }

  fakeMethod() {
    this.setState({ women: "3.7 billion" });
  }

  componentDidMount() {
    this.fakeMethod();
  }

  render() {
    return (
      <div>
        There are {this.props.people} people, of which {this.props.men} are men.
        And also {this.state.women} are women.
      </div>
    );
  }
}

export default Hello;
