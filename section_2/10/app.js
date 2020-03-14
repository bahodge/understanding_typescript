var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
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
