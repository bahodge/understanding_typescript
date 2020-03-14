function add(n1: number, n2: number): number {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (x: number) => void) {
  const result = n1 + n2;
  cb(result);
}

function printResult(num: number) {
  console.log("Result ", num);
}

// printResult(add(5, 10));

// Function type
// let combineValues: (a: number, b: number) => number;

// combineValues = add;
// combineValues = printResult; // error
// printResult(combineValues(8, 10));

addAndHandle(1, 2, result => {
  printResult(result);
});
