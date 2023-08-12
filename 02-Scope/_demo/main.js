// {
//   // GLOBAL SCOPE

//   let message = "Hi";

//   function sayHi() {
//     // ทุกครั้งที่เจอปีกกา = 1 scope
//     // อยู่ใน function = FUNCTION SCOPE
//     let message = "Hello";
//     console.log(`##${message}`);
//   }
//   sayHi();
//   console.log(message); //log message ใน global = ดึง message มาจากของ global
// }

///////////////////////////

//variable: message = identifier //variable เก็บ value/ expression ไว้
let message = "Hi";
// let message = "a"; >>> ห้ามมีชื่อตัวแปร หรือ identity ซ้ำกันใน scope เดียวกัน >> แต่ var ใช้ซ้ำได้ >> เลยหลีกเลี่ยงการใช้ var
// วิธีแก้คือ reassign ได้ โดยไม่ต้องใส่ let
message = "a";

//function: sayHi == identifier //function เก็บ statement/ procedure ไว้
function sayHi(m) {
  let message = "a";
  console.log(m);
}

////////////////
