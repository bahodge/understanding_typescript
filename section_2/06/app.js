function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult)
        console.log(phrase + result);
    return result;
}
var number1 = 5;
var number2 = 3.25;
var printResult = true;
var phrase = "Result is ";
add(number1, number2, printResult, phrase);
