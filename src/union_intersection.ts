//union and intersection in typescript
type NoobDeveloper = {
  name: string;
  age: number;
  isSalary: boolean;
};

//intersection
type JuniorDeveloper = NoobDeveloper & {
  name: string;
  expertise: string;
  experience: number;
};

//union
const testDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "mahedi",
  expertise: "C++",
  experience: 4,
  age: 40,
  isSalary: true,
};

const newDeveloper: JuniorDeveloper = {
  name: "sharif",
  expertise: "JavaScript",
  experience: 1,
  age: 40,
  isSalary: true,
};

//this is enum type in typescript but typescript doesn't recommend this
enum Level {
  junior = "Junior",
  mid = "Mid",
  senior = "Senior",
}

type NextLevelWebDeveloper = JuniorDeveloper & {
  leadershipExpertise: number;
  level: Level;
};

const developer: NextLevelWebDeveloper = {
  name: "Web Bhai",
  expertise: "JavaScript",
  experience: 2,
  leadershipExpertise: 3,
  age: 30,
  isSalary: false,
  level: Level.senior,
};
