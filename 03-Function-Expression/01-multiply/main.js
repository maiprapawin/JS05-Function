// - ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Function Expression
// - ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 17 กับ 7

/////////////////////////////////////////

let multiply = (function (num1, num2) {
  return num1 * num2;
})(17, 7);
console.log(multiply); // 119
