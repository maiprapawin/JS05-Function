// หาร 4 ลงตัว = true
// 1800 => false
// 1900 => false
// 2000 => true

// ปีที่หาร 100 ลงตัว = ไม่เป็น leap year
// ยกเว้นหาร 400 ลงตัว = leap year
// ที่เหลือ หาร 4 ลงตัว = leap year

// Year => Boolean
// isLeapYear: Year=> Boolean

/////////////////////////////////

// const isLeapYear = (year) => {

// Solution 1
//   if (year % 4 === 0 && year % 100 != 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 != 0) {
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//      return false;
//    }

// Solution 2
//   if (year % 400 == 0) {
//     return true;
//   } else if (year % 100 == 0) {
//     return false;
//   } else if (year % 4 == 0) {
//     return true;
//   } else {
//       return false;
//     }

// Solution 3
//   if (year % 400 == 0) {
//     return true;
//   }

//   if (year % 100 == 0) {
//     return false;
//   }

//   if (year % 4 == 0) {
//     return true;
//   }

//   return false;

// Solution 4
//   if (year % 100 === 0) {
//     return year % 400 == 0;
//   }
//   return year % 4 === 0;

// Solution 5
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// };

const isLeapYear = (year) =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
