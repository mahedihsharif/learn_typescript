//normal object
const user: {
  name: string;
  age: number;
  isMarried: boolean;
  occupation?: string;
} = {
  name: "sharif",
  age: 27,
  isMarried: false,
};

//value type object
const user2: {
  name: "Hello Bangladesh";
  age: number;
  isMarried: boolean;
  occupation?: string;
} = {
  name: "Hello Bangladesh",
  age: 27,
  isMarried: false,
};

//another method
//value type object
const user3: {
  readonly name: string;
  age: number;
  isMarried: boolean;
  occupation?: string;
} = {
  name: "Hello Bangladesh",
  age: 27,
  isMarried: false,
};

user3.name = "Hello Comilla"; //you can write this value because it's only read value

const person2: {
  name: string;
  age: number;
  salary: number;
  addSalary(money: number): string;
} = {
  name: "John",
  age: 30,
  salary: 1000,
  addSalary: function (money: number) {
    return `My new salary is: ${this.salary + money}`;
  },
};
