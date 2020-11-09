import Hello from "./HelloWorld.component";
import GoodBye from "./GoodBye.component";

function App() {
  let people = "7 billion";
  const men = "3.5 billion";
  const a = [1, 2, 3];
  const o = {
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Hello people={people} men={men} a={a} o={o} />
      <GoodBye population={people}></GoodBye>
    </>
  );
}

export default App;
