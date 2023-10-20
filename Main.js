let list = document.querySelector(".list");
let Klose = document.querySelector(".close");
let MenuBar = document.querySelector(".menuBar");

MenuBar.addEventListener("click", () => {
  list.classList.toggle("active");
});
Klose.addEventListener("click", () => {
  list.classList.toggle("active");
});
