function makeWorker() {
  let name = "Pete";
  return function () {
    alert(name); // alert Pete
  };
}
let name = "John";
let work = makeWorker();
work(); // * >>> alert Pete เพราะถึงแม้จะตั้ง name = John แต่พอเราเรียกฟังก์ชั่น makeWorker() มาแล้ว value ของ name ก็จะเป็น Pete

//////////////////////////////////////////////////////////////////
// ด้านล่างนี้น่าจะไม่เกี่ยว//

// function multiply(num1, num2, callback) {
//     let result = num1 * num2;
//     callback(result);
// }

// function displayResult(result) {
//     console.log('The result is: ' + result);
// }

// multiply(5, 10, displayResult);

// function outerFunction() {
//     let outerVariable = 'Hello';

//     function innerFunction() {
//         console.log(outerVariable + ' World!');
//     }

//     return innerFunction;
// }

// let greeting = outerFunction();
// greeting(); // Output: "Hello World!"

// function adder(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// let add5 = adder(5);
// console.log(add5(3)); // Output: 8
// console.log(add5(7)); // Output: 12
