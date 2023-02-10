const btn1 = document.querySelector("#btn1");
console.log(btn1);
const btn2 = document.querySelector("#btn2");
console.log(btn2);
btn1.addEventListener("click", () => {
  Puck.write("LED1.set();\n");
});
btn2.addEventListener("click", () => {
  Puck.write("LED1.reset();\n");
});
