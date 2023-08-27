// Remove duplicate items from an array
function uniqueName(item) {
  let box = [];
  for (let i = 0; i < item.length; i++) {
    let value = item[i];
    console.log(value);
    if (box.includes(value) === false) {
      box.push(value);
    }
  }
  return box;
}
let array = [
  "Kutub",
  "Abul",
  "Mokbul",
  "Sabul",
  "Sabul",
  "Kutub",
  "Kutub",
  "Abul",
];
let result = uniqueName(array);
console.log("Unique names list are", result);
