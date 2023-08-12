/* การเขียน function มี 2 รูปแบบเป็นหลัก */

// 1. Function Declaration / Named Function
//     - เป็นฟังก์ชั่นที่มีชื่อ มีการกำหนดชื่อให้
//     - การใช้งานฟังก์ชั่น ต้อง

// 1.1 Define
//     - ประกาศฟังก์ชั่น >> กำหนดชื่อ, input
function sayHi(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
}

// 1.2 Call
//     - เรียกใช้งาน
sayHi("Mai", "Terd");
sayHi("John", "Doe");

// RETURN VALUE

// = ผลลัพธ์ที่ได้จาการ run function จนเสร็จ
// add(5,6) == Return Value, Function Result (ผลลัพธ์จากการรันฟังก์ชั่น)
// เอาตัวแปรมารับได้
// ทำเสร็จแล้วตัดจบ อะไรหลังจากนั้นจะไม่ทำ
// เรียกใช้ฟังชั่นเครื่องซักผ้า ต้องรอ 30 นาที ถึงจะได้ return ออกมาเป็นผ้าสะอาด

// eg.

function add(x, y) {
  let result = x + y;
  return result; //ข้อมูลถูกรันแล้ว แต่หายไป เพราะไม่ได้ถูกนำไปใช้งานต่อ
}
// add(5, 6); // need time to process แต่เมื่อ done แล้ว add(5,6) === result
console.log(11 === add(5, 6));

let r = add(5, 6); // reusable result
console.log(add(5, 6)); // one time use = เรียกว่า การใช้ค่าแบบ on the fly ใช้แล้วจบตรงนั้น ไม่ได้ให้คนอื่นไปใช้ต่อ ไม่เปลือง memory ในการเก็บตัวแปร

// MULTIPLE RETURN

// function isEven(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(n) {
//   if (n % 2 == 0) {
//     return true;
//   }
//     return false;
//   }

function isEven(n) {
  return n % 2 == 0;
  // return 6 % 2 === 0 (true)
  // return 5 % 2 === 0 (false)
}

console.log(isEven(6));
console.log(isEven(5));

/* CheckPoint
 - Declare : ประกาศเป็น
 - Parameter : รับ input
 - Call : รันฟังก์ชั่น
 - Return : เข้าใจเรื่อง return (ถ้าไม่ใส่ return = default จะเป็น undefined)
*/

////////////////////////////////////////////////////////////////////////////

/* 2. Function Expression = มักจะถูกเขียนในรูปของ anonymous function */

let a = 5 * 2 + 7;
// variable = expression >> เอา expression ไปใส่ variable

/*
Expression (สิ่งที่สามารถ evaluate เป็น single value ได้)
- Single value: 7
- Combined expression: 7 + 2
- FN result: add(7,2) >> ผลลัพธ์จากการ call
*/

let myFunc = add;
let z = console.log;
// FORMATE: variable = FN
// (FN Expression = การ assign function ให้กับ variable)

console.log(myFunc(5, 2));
z("Hi"); // = console.log("Hi");

//////////////////////////////////

// 2.1 Anonymous FN

// syntax: FN Expression
// อธิบาย: เรากำลัง assign Anonymous function ให้กับตัวแปร sayHello
// ห้ามเรียกใช้ก่อนประกาศตัวแปร sayHello ก็คือห้ามเรียกใช้ตัวแปร sayHello ก่อนการประกาศ
// sayHello = ตัวแปร

const sayHello = function (name) {
  console.log("Hi" + name);
};

sayHello();

//////////////////////////////////

// 1. function add() {} >>> แบบ declaration
// 2. Function Expression
// 2A. let add = function () {} >>> แบบ anonymous
// 2B. let add = () => {} >>> แบบ arrow function/ modern

//////////////////////////////////

// 2.2 Arrow Function

// const minus = (a, b) => {
//   return a - b;
// };

// แต่ถ้า logic เราไม่ได้ซับซ้อน และมีแค่อันเดียว:
// - ละปีกกาได้
// - ละ return

const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

// console.log(minusTwo(5));
// console.log(two);

// console.log(minusTwo);
// console.log(two());
