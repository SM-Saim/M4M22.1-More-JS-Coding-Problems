// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

function feetToInch(values) {
  const result = values * 12;
  return result;
}
let value = 30;
let res = feetToInch(value);
console.log(res, "inch");

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
function centimeterToMeter(numb) {
  const output = numb / 100;
  return output;
}
let nm = 45;
let finalresult = centimeterToMeter(nm);
console.log(finalresult, "Meter");

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

function paperRequirements(par1, par2, par3) {
  console.log("1st book copy is", par1);
  console.log("2nd book copy is", par2);
  console.log("3rd book copy is", par3);
  let sumPage = par1 * 100 + par2 * 200 + par3 * 300;
  return sumPage;
}
let value1 = 10;
let value2 = 20;
let value3 = 30;
let result = paperRequirements(value1, value2, value3);
console.log("Total pages of all books", result);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

function bestFriend(values) {
  let longest = values[0];
  for (let i = 0; i < values.length; i++) {
    let split = values[i];
    if (split.length > longest.length) {
      longest = split;
    }
  }
  return longest;
}
let arr = ["dakum", "Kurduglu", "Baybolet", "Sadeddien", "KutubUddin"];
let friend = bestFriend(arr);
console.log("Longest name is", friend);

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
function numbers(line) {
  let box = [];
  for (let i = 0; i < line.length; i++) {
    let splits = line[i];
    if (splits >= 0) {
      box.push(splits);
    } else {
      break;
    }
  }
  return box;
}
let ary = [33, 66, 45, 33, 2, 4, 66, -33, 22, 7, 33, 6, 88];
let line = numbers(ary);
console.log("Positive values are", line);
