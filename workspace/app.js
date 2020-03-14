var userInput;
var userName;
userInput = 5;
userInput = "ben";
// userName = userInput; // error
if (typeof userInput === "string") {
    userName = userInput; // no error
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("ahhh", 500);
