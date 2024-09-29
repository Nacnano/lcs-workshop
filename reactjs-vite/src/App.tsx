import { useEffect, useState } from "react";
import Tab from "./Tab";
import { animals } from "./data";
function App() {
  const [searchValue, setSearchValue] = useState<string>();
  const [filteredAnimals, setFilteredAnimals] = useState<string[]>(animals);
  const [count, setCount] = useState<number>(0);
  const [double, setDouble] = useState<number>();
  const [showTab, setShowTab] = useState<boolean>(false);

  let count2 = 0;

  useEffect(() => {
    setDouble(2 * count);
  }, [count]);

  function onInputChange(e) {
    const value = e.target.value;
    setSearchValue(value);
  }

  useEffect(() => {
    const filteredAnimals2 = animals.filter((animal) =>
      animal.includes(searchValue)
    );
    setFilteredAnimals(filteredAnimals2);
  }, [searchValue]);

  const [boxes, setBoxes] = useState<string[]>([
    "X",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
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
        {boxes.map((box) => {
          return <div>{box}</div>;
        })}
        {/* <input type="text" onChange={onInputChange}></input>
        <ol>
          {filteredAnimals.map((animal) => (
            <li>{animal}</li>
          ))}
        </ol> */}
        {/* <button onClick={() => setShowTab((prev) => !prev)}>Toggle Show</button>
        {showTab && <Tab name="Project1" desc="Description1" />}
        <h3>Count: {count}</h3>
        <h3>Double: {double}</h3>

        <h3> Count2 : {count2}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => (console.log(count2), (count2 = count2 + 1))}>
          Increase 2
        </button> */}
      </div>
    </>
  );
}

export default App;
