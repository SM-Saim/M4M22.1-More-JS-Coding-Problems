// Calculate the total cost of the products in a shopping cart
let shopping = [
  { name: "shoe", price: 1200, quantity: 3 },
  { name: "shirt", price: 2000, quantity: 6 },
  { name: "pant", price: 3000, quantity: 4 },
  { name: "belt", price: 700, quantity: 10 },
];
function shoppingCart(shopping) {
  let sum = 0;
  for (let i = 0; i < shopping.length; i++) {
    let split = shopping[i];
    console.log(split);
    let allTotal = split.price * split.quantity;
    sum = sum + allTotal;
  }
  return sum;
}
let value = shoppingCart(shopping);
console.log("total cost of the products", value);
