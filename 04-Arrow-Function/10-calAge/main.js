// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

/* Mai's Note: 
- input = ปีเกิด
- max 2020
- จำนวนปี >> 2020 - year
- years to days >> (2020 - year) * 365 = output
*/

let birthYear = (year) => {
  if (year <= 2020) {
    let sum = (2020 - year) * 365;
    // return sum;
    console.log(sum);
  } else {
    alert("Wrong year");
  }
};

birthYear(1995); // 9125 days
birthYear(2000); // 7300 days
birthYear(2023); // alert Wrong year
