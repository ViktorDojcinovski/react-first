import Hello from "./HelloWorld.component";
import GoodBye from "./GoodBye.component";

function App() {
  const people = "7 billion";
  const men = "3.5 billion";
  const women = "3.6 billion";
  const a = [1, 2, 3];
  const o = {
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Hello people={people} men={men} women={women} a={a} o={o} />
      <GoodBye people={people} />
    </>
  );
}

export default App;
