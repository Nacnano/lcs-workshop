type Cat = {
  id: number;
  name: string;
  breed: string;
  age: number;
  isIndoor: boolean;
};

const catList: Cat[] = [
  {
    id: 1,
    name: "Whiskers",
    breed: "Siamese",
    age: 3,
    isIndoor: true,
  },
  {
    id: 2,
    name: "Mittens",
    breed: "Persian",
    age: 5,
    isIndoor: false,
  },
  {
    id: 3,
    name: "Shadow",
    breed: "Maine Coon",
    age: 2,
    isIndoor: true,
  },
  {
    id: 4,
    name: "Luna",
    breed: "Bengal",
    age: 4,
    isIndoor: false,
  },
  {
    id: 5,
    name: "Tiger",
    breed: "Tabby",
    age: 1,
    isIndoor: true,
  },
];

export default catList;
