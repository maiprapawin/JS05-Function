// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

// Mai's Note:
// input = number
// หาร 7 ลงตัว = number % 7 = 0

let isSeven = (num) => {
  if (num % 7 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isSeven(49)); // true
console.log(isSeven(50)); // false
console.log(isSeven(187)); // false
console.log(isSeven(63)); // true
