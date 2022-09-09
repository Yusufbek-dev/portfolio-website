let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".list");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".list a").forEach(item => {
  item.addEventListener("click", ()=> {
    hamburger.remove("active");
    nav.remove("active");
  });
});