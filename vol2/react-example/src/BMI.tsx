import { useEffect, useState } from "react";
import "./App.css";

function BMI() {
  const [weight, setWeight] = useState(100);
  const [height, setHeight] = useState(180);
  const [bmi, setBmi] = useState();

  function onWeightChange(e) {
    setWeight(Number(e.target.value));
  }

  function onHeightChange(e) {
    setHeight(Number(e.target.value));
  }

  useEffect(() => {
    setBmi((weight / height / height) * 10000);
  }, [weight, height]);

  return (
    <>
      <h1>BMI calculator</h1>
      <div>
        weight
        <input type="number" onChange={onWeightChange} value={weight} />
        height
        <input type="number" onChange={onHeightChange} value={height} />
      </div>
      <h1>bmi {bmi}</h1>
    </>
  );
}

export default BMI;
