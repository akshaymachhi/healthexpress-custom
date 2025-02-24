// Scroll to top

let mybutton = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// navigation scroll effect
let prevscroll = window.scrollY;

window.onscroll = function () {
  let currentscroll = window.scrollY;

  // navigation
  if (prevscroll < 80) {
    document.querySelector(".header-main").classList.remove("with-bg");
  } else {
    document.querySelector(".header-main").classList.add("with-bg");
  }

  prevscroll = currentscroll;
};
