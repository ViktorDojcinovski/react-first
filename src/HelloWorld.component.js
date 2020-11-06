import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        There are {this.props.people} people, of which {this.props.men} are men.
        And also {this.props.women} are women.
      </div>
    );
  }
}

export default Hello;
