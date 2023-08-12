// - ให้สร้างฟังก์ชันชื่อ findMin มีพารามิเตอร์ 2 ตัว
// - ให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function findMin(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  }
}

console.log(findMin(5, 10));
