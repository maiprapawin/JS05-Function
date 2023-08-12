console.log("anonymous");

// #1: Named fn (function), FN Declaration
// function add () {}

// #2: Anonymous

// 2A: IIFE
// Syntax ด้านล่างนี้ เรียกว่า IIFE = Intermediate Invoke Function Expression
// ข้อดีคือประหยัด memory อันนี้ process แล้วจบ ไม่เก็บไว้ใน memory ของ cpu
// reuse ต่อไม่ได้
// ใช้ครั้งเดียวจบ one time usage

(function (message) {
  console.log(message);
})("Hi");
// อะไรที่ตามด้วย () คือการเรียก function

(function (x, y) {
  console.log(x + y);
})(10, 5);

// console.log(
// (function (x, y) {
//   return x+y;
// })(10, 5)
// );

let a = (function (x, y) {
  return x + y;
})(10, 7);
console.log(a);

// 2B:

// VARIABLE = EXPRESSION
// ตัวแปรไว้เก็บ datatype เฉยๆ เช่น เก็บ string, number (expression)
let myVar = (5 * 2) % 7;

// VARIABLE = FN (FN === EXPRESSION) = การ assign function ให้ตัวแปร
// console.log(myFunc(5,10)); >> ใช้ก่อนประกาศตัวแปรไม่ได้ ป้องกัน Hoisting เรียกว่า Function Expression

// ASSIGN anonymous fn to variable
const myFunc = function (x, y) {
  return x + y;
};

console.log(myFunc(5, 10));

// ASSIGN named fn to variable
const z = console.log;
z("Hi");

// ### Anonymous (Modern: Arrow Syntax)

// A: Shortest
let zz = (x) => x + 2; // ย่อแบบสั้นสุด มีอันเดียวก็เลยเอาพวกวงเล็บ ปีกกาออก บรรทัดเดียว ไม่ต้องปีกกา ไม่ต้องใส่ return
let aa = function (x) {
  return x ** 2;
};
let bb = (x) => x ** 2; // bb เก็บ function ที่รับ x เข้าไป แล้วส่งค่าคืนมาเป็น x กำลังสอง // Arrow Function

console.log(zz(8));
console.log(aa(3)); // aa = function นี้ ใส่ค่า 3 เข้าไป
console.log(bb(5));

let cc = (x, y) => x + y;
console.log(cc(5, 6));

// B: Bracket
let dd = (x, y) => {
  let result = x + y;
  return result; // ถ้าจะเขียนหลายบรรทัด ห้ามลืมใส่ return ไม่งั้นมันจะ return เป็น undefined, ถ้ามีปีกกา/ bracket ต้องใส่ return ด้วย
};
console.log(dd(6, 7));
