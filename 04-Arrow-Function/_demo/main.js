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
