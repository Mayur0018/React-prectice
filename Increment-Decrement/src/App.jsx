import { useState } from "react";

function App() {
  const [Counter, SetCounter] = useState(0);
  const HandleIncrement = () => {
      SetCounter(Counter + 1);
      document.body.style.backgroundColor = "red";
  };
  const HandleDecrement = () => {
    if (Counter !== 0) {
      SetCounter(Counter - 1);
      document.body.style.backgroundColor = "green";
  }
  };
  return (
    <>
      <h1>{Counter}</h1>
      <button onClick={HandleIncrement}>+</button>
      <button onClick={HandleDecrement}>-</button>
    </>
  );
}

export default App;
