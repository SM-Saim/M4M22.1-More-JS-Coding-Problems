// Show the output from 1-50
// 1.If the number is divisible by 3 then insted of number show "foo"
// 2.If the number is divisible by 5 then insted of number show "bar"
// 3.If the number is divisible both 3 abd 5 then insted of number show "foobar"

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

// Note: if else er condition er khetre kono item jodi ekta if ba else er condition er modde  chole jai, taile se next condition gular sorto fullfill  korleo ar repeat hobe na. tai if er kon condition ta age dibo eta kheal korte hobe.
