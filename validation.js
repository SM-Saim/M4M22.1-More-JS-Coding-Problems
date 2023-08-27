// validation
function value(value1, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return "Pls enter a valid number";
  }
  const sum = value1 + value2;
  return sum;
}
let result = value(33, 55);
console.log(result);

//Some common mistakes
function value(num1, num2) {
  mul = num1 * num2;
  return mul;
}
// let results = value(33*66);
let results = value(33, 66);
console.log("Result is", results);
