// Find the highest phone from an array of phone objects
let phones = [
  { name: "samsung", camera: 12, price: 32000, color: "silver" },
  { name: "xaomi", camera: 12, price: 22000, color: "silver" },
  { name: "pixel", camera: 12, price: 52000, color: "silver" },
  { name: "iphone", camera: 12, price: 100000, color: "silver" },
  { name: "redmi", camera: 12, price: 20000, color: "silver" },
  { name: "infinix", camera: 12, price: 30000, color: "silver" },
];

function highest(phones) {
  let high = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let split = phones[i];
    if (split.price > high.price) {
      high = split;
      console.log(high);
    }
  }
  return high;
}
let expense = highest(phones);
console.log("High price phone is", expense);
