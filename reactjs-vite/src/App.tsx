import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [double, setDouble] = useState<number>();

  // const [state1, setCount] = useState<number>(0);
  // const [state2, setDouble] = useState<number>();
  const someFunction = () => {};
  // useEffect(someFunction, [state1, state2]);

  useEffect(someFunction);

  useEffect(() => {
    setDouble(2 * count);
  }, [count]);

  return (
    <>
      <div
        style={{
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", // Stack elements vertically
        }}
      >
        <h3>Count: {count}</h3>
        <h3>Double: {double}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      </div>
    </>
  );
}

export default App;
