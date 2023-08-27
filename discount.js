// Multi-layer discount price calculation
// 1.1st 100 ticket 100 tk
// 2.less than 200, 1st 100 ticket  100tk, rest of ticket 70 tk
// 3. less thean 300, 1st 100 ticket 100 tk, 2nd 100 70tk, 3rd 100 60 tk
function ticketTotal(number) {
  const firstHundred = 100;
  const secondHundred = 70;
  const thirdHundred = 60;
  if (number <= 100) {
    const ticketPrice1 = number * firstHundred;
    return ticketPrice1;
  } else if (number <= 200) {
    const ticketPrice2ndOne = number * firstHundred;
    const ticketPrice2ndTwo = number * secondHundred - 100;
    const totalPrice2nd = ticketPrice2ndOne + ticketPrice2ndTwo;
    return totalPrice2nd;
  } else {
    const ticketPrice3rdOne = number * firstHundred;
    const ticketPrice3rdTwo = number * secondHundred - 100;
    const ticketPrice3rdThree = number * thirdHundred - 200;
    const totalPrice3rd =
      ticketPrice3rdOne + ticketPrice3rdTwo + ticketPrice3rdThree;
    return totalPrice3rd;
  }
}
let number = 190;
let total = ticketTotal(number);
console.log("Total prize of the ticket is", total);
