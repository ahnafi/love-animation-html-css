//bahan
const box = document.querySelector(".box");
const p = document.querySelector(".parg");
const lcircle = document.querySelector(".lbox");
const rcircle = document.querySelector(".rbox");
const text1 = document.querySelector(".up")
const text2 = document.querySelector(".down")
//system
box.addEventListener("click", function () {
  //toggle
  this.classList.add("size");
  p.style.display = "none";

  //menggunakan arrow function
  setTimeout(() => {
    this.classList.add("caption");
    lcircle.classList.add("dbox");
    rcircle.classList.add("dbox");
    setTimeout(() => {
      lcircle.classList.add("kibox");
      rcircle.classList.add("kabox");
      text1.innerHTML = "Hi you .."
      text2.innerHTML = "I Love You"
    }, 600);
  }, 500);
});
