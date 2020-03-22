const names0: Array<string> = ["max", "ben"];

const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

const result = promise.then(data => data.split(" "));
console.log(result);

// AS NON GENERIC
function merge0(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
const merged0 = merge0({ a: "Hello" }, { b: "world" });
console.log(merge0({ a: "Hello" }, { b: "world" }));

merged.a; // error

// WITH GENERIC
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged = merge({ a: "Hello" }, { b: "world" });
merged.a; // no error

function merge1<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged1 = merge1({ a: "Hello" }, 30); // REQUIRES OBJECT Error
merged1.a; // no error

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("cats"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "ben" }, "name"));

// GENERIC CLASS
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("hello"); // No Error
textStorage.addItem(1); // Error

const numberStorage = new DataStorage<number>();

numberStorage.addItem("hello"); // Error
numberStorage.addItem(1); // No Error

const objectStorage = new DataStorage<object>();

objectStorage.addItem({ name: "Ben" }); // Error
objectStorage.addItem({ name: "Steven" }); // No Error

console.log(objectStorage.getItems());

objectStorage.removeItem({ name: "Ben" });

console.log(objectStorage.getItems());

// Using Partial and Read ONly
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["ben", "pc"];
names.push("Steven"); // Error
names.pop(); // Error
