const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ben",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: [1, "cat"]
};

console.log("person", person.hobbies);

person.role[1] = 15;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // error
}
