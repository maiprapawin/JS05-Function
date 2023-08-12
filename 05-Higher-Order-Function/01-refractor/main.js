function ask(question, yes, no) {
  if (confirm(question))
    yes(); // yes() คือเรียก function ที่ user เรียกใช้ ask() ใส่ไว้ของ yes
  else no();
}

ask(
  // question
  "Do you agree?",

  // yes
  function () {
    alert("I agree with you.");
  },

  // no
  function () {
    alert("whyyyyyyy !");
  }
);
