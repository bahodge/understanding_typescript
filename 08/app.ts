const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Ben",
  age: 29,
  hobbies: ["Sports", "Cooking"]
};

console.log("person", person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // error
}
