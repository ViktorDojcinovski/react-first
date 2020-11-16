import React from "react";

function GoodBye(props) {
  function onClickHandler() {
    console.log("You clicked on the div tag in the GB component!");
  }

  return (
    <>
      <div onClick={onClickHandler}>GoodBye world {props.population}</div>
      <div>
        I received that there are {props.children} children in the world.
      </div>
    </>
  );
}

export default GoodBye;
