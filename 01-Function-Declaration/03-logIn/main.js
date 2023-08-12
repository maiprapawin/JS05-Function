function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    alert("Login สำเร็จ");
  } else {
    alert("Login ไม่สำเร็จ");
  }
}

let username = prompt("enter username");
let password = prompt("enter password");

login(username, password);
