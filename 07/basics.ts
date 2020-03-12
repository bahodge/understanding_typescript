function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);

  return result;
}

const number1: number = 5;
const number2: number = 3.25;
const printResult: boolean = true;
const phrase: string = "Result is ";

add(number1, number2, printResult, phrase);
