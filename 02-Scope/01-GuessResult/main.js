let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi();

// Hi, Pete เพราะ name ถูก reassign ค่า จาก John เป็น Pete
