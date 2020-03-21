interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => a + b;

interface Named {
  readonly name: string;
  outputName?: string; // optional name
}

interface Greetable extends Named {
  greet(phrase: string): string;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    return `${phrase} ${this.name}`;
  }
}

let user1 = new Person("Ben", 29);

console.log(user1.greet("Hell0 there"));
