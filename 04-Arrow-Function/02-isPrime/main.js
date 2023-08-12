// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

const isPrime = (a) => {
  if (a <= 1) return false;
  for (
    let i = 2;
    i < a;
    i++ // ไม่เอา 1 เพราะ 1 หารลงทุกตัว
  ) {
    if (a % i == 0) return false;
  }
  return true;
};

console.log(isPrime(-10)); // false
