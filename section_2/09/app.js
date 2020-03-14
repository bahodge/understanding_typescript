var person = {
    name: "Ben",
    age: 29,
    hobbies: ["Sports", "Cooking"],
    role: [1, "cat"]
};
console.log("person", person.hobbies);
person.role[1] = 15;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // error
}
