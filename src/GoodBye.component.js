import React, { useState, useEffect } from "react";

function GoodBye(props) {
  const [people, setPeople] = useState({
    men: 1,
    women: "7264",
    children: "2.7 billion",
  });
  const [counter, setCounter] = useState(1);

  useEffect(() => {});

  function onClickHandler() {
    console.log("You clicked on the div tag in the GB component!");

    console.log(people);

    //setPeople({ ...people, children: "2.6 billion" });
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
