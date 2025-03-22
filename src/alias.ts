type CrushType = {
  name: string;
  age?: number;
  profession: string;
};

const crush1: CrushType = {
  name: "Moyna Pakhi",
  age: 22,
  profession: "Web Development",
};

const crush2: CrushType = {
  name: "Tia Pakhi",
  profession: "Next Level Web Development",
};

type MarriedType = boolean;
const isMarried: MarriedType = true;

type NameType = string;
const lName: NameType = "sharif";

const calculator = (
  num1: number,
  num2: number,
  operation: (x: number, y: number) => number
) => {
  return operation(num1, num2);
};

const sum = calculator(10, 20, (x, y) => x + y);
const sub2 = calculator(10, 20, (x, y) => x - y);
const mul = calculator(10, 20, (x, y) => x * y);

console.log(sum, sub2, mul);
