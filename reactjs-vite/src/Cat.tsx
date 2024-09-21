// type CatPropType = {
//   name?: string;
//   age?: number;
//   onChange?: () => void;
//   object?: { name: string; age: number };
//   array?: number[];
// };

// function Cat({ name, age, onChange, object, array }: CatPropType) {
//   return (
//     <div>
//       <h1>Cat: {name}</h1>
//       <h2>Age: {age}</h2>
//     </div>
//   );
// }

// function Cat() {
//   const isSleeping: boolean = true;
//   return (
//     <div>
//       {isSleeping && <h1>It is sleeping</h1>}
//       {isSleeping ? <h1>It is sleeping</h1> : <h1>It is awake</h1>}
//     </div>
//   );
// }

function Cat() {
  const foodList = ["tuna", "cat food", "sardine"];
  return (
    <div>
      {foodList.map((food) => {
        return <h1 key={food}>It loves to eat {food}</h1>;
      })}
    </div>
  );
}

export default Cat;
