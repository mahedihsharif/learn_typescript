let num2: number[] = [10, 20, 30, 40];

let person5: string[] = ["a", "b", "c", "d"];

num2[2] = "sharif"; //you can't do this

let num3: any[] = [10, 20, 30, 40];

num3[2] = "sharif"; //you can do this

num2.map((item: number) => item * 2);

let num4: [number, string] = [30, "sharif"]; //it's called tuple in typescript
