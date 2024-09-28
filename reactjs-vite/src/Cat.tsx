// type CatPropType = {
//   name?: string;
//   age?: number;
//   isSleeping: boolean;
// };

// function Cat({ name, age, isSleeping }: CatPropType) {
//   return (
//     <div>
//       <h1>Cat: {name}</h1>
//       <h2>Age: {age}</h2>
//       {isSleeping == false && <h2>Meow!!!</h2>}
//       {isSleeping ? <h2>Sleeping</h2> : <h2>Meow!!!</h2>}
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
  const foodList = ["tuna", "cat food", "sardine", "tuna"];
  return (
    <div>
      {foodList.map((food, index) => {
        return <h1 key={food + index}>It loves to eat {food}</h1>;
      })}
    </div>
  );
}

// function Cat({ name }: { name: string }) {
//   return <h1>Cat's name is {name}</h1>;
// }

export default Cat;
