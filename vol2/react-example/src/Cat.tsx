type CatProp = {
  name: string;
  age: number;
  color: string;
  isSleeping: boolean;
};

function Cat({ name, age, color, isSleeping }: CatProp) {
  const foods = ["sushi", "cat food", "oreo"];
  return (
    <div>
      {foods.map((food) => {
        return <h2 key={food}>{food}</h2>;
      })}
      {isSleeping ? (
        <div>
          <h1>Cat</h1>
          <h2>{name}</h2>
          <h2>{age} years</h2>
          <h2>{color}</h2>
        </div>
      ) : (
        <h1>Awake</h1>
      )}
    </div>
  );
}

export default Cat;
