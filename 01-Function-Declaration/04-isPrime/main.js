// STAR PATTERN
// dynamic row = 1 for loop
// dynamic col = 1 for loop

// Prime Number
// ตัวตั้ง n (fixed)
// ตัวหาร dynamic = 1 loop

// n = 5 : 2 3 4
// n = 6 : 2 3 4 5
// n = 7 : 2 3 4 5 6 7

// let n = 5;
// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//   if (n % divider == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log(n);

// DESIGN FUNCTION
// - input คืออะไร
// - logic ที่จะ implement คืออะไร
// - output คืออะไร

// โจทย์นี้
// 1. input = number ที่ใช้เช็ค
// 2.
// 3. output = boolean true/false
// function เราจะต้องรับเลขเข้าไป แล้ว return เป็น boolean ตามโจทย์ข้อนี้ที่ได้มา

function checkPrime(num) {
  //function checkPrime รับ num เข้ามา
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

checkPrime(7);
checkPrime(13);
checkPrime(61);
checkPrime(63);
checkPrime(83);

// ABSTRUCTION
// - simple ideas = one idea
// - hiding complexity
// - simple interaction
