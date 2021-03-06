import React from "react";
// Other way for importing Component
// import { Component } from "react"

class HelloWorld extends React.Component {
  constructor(props) {
    console.log("Constructor called!");
    super(props);

    this.state = {
      women: "3.6 billion",
      children: "2 billion",
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    console.log("ComponentDidMount method called!");
    this.setState({ women: "3.7 billion" });
    /**
     * {
      women: "3.7 billion",
      children: "2 billion",
    }
     */

    setTimeout(() => {
      this.props.removeGoodBye();
    }, 5000);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate method called!");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount method called on HelloWorld component!");
  }

  onClickHandler() {
    this.props.getChildren(this.state.children);
  }

  render() {
    console.log("Render method called!");
    return (
      <>
        <div className={this.props.className}>
          There are {this.props.people} people, of which {this.props.men} are
          men. And also {this.state.women} are women.
          <button onClick={this.onClickHandler}>
            Show how meny children are there
          </button>
          <label>
            Name:
            <input />
          </label>
        </div>
      </>
    );
  }
}

export default HelloWorld;
