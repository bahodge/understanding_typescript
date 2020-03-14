enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Ben",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

console.log("Role", person.role);
// console.log("person", person.hobbies);
// person.role[1] = 15; // error

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()) // error
// }
