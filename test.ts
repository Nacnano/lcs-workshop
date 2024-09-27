let a: number = 1;

type Person = {
  name: string;
  age: number;
  foods: string[];
};

const nac: Person = { name: "Nac", age: 20, foods: ["1", "2", "3"] };

console.log(nac.foods);
