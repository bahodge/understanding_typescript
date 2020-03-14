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
  lazyness: any;
} = {
  name: "Ben",
  age: 29,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
  lazyness: [1, "cat", {}]
};

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(10, 15);
const combinedName = combine("ben", "steven");

// console.log("Role", person.role);
// console.log("person", person.hobbies);
// person.role[1] = 15; // error

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()) // error
// }
