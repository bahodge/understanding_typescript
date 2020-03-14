let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "ben";
// userName = userInput; // error

if (typeof userInput === "string") {
  userName = userInput; // no error
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("ahhh", 500);
