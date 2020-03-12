type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAgesAsString = combine(10, 15, "as-string");
const combinedAgesAsNumber = combine("10", 15, "as-number");
const combinedNamesAsString = combine("ben", "steven", "as-string");
