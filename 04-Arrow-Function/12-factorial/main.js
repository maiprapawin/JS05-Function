// ให้เขียนฟังก์ชันคำนวณค่า factorial

//////////////////////////////////////////////////
// Mai's Note:
// factorial เช่น 3! = 3 * (3-1) * (3-2)
// 3! = 3 * 2 * 1
// n! = n * (n-1) * (n-2) * (n-3) * .... * 1
//////////////////////////////////////////////////

///////// draft /////////
// let result;

// let factorial = (num) => {
//   for (let x = 1; x < num; x++) {
//     let minus = num - x; // 5 - 1 = 4
//     console.log(minus); // 4 3 2 1
//   }
// };

// factorial(5);

//////////////////////////////////////////////////

let factorial = (num) => {
  let result = 1;
  for (let x = 1; x <= num; x++) {
    result *= x;
  }
  return result;
};

console.log(factorial(5));

// result *= x;
// x = 1, result = 1 >>> result = 1*1
// x = 2, result = 1 >>> result = 1*2 = 2
// x = 3, result = 2 >>> result = 2*3 = 6
// x = 4, result = 6 >>> result = 24
// x = 5, result = 24 >>> result = 120
