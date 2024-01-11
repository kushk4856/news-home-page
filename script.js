const toggleBtn = document.querySelector(".menue");
const toggleImg = document.querySelector(".menue__toggle");
const sideMenue = document.querySelector(".phone__menue");
const overlay = document.querySelector(".overlay");

let toggleCond = false;
toggleBtn.addEventListener("click", function () {
  toggleCond = !toggleCond;
  console.log(toggleCond);
  if (toggleCond) {
    toggleImg.src = "images/icon-menu-close.svg";
    sideMenue.classList.remove("hidden");
    overlay.classList.remove("hidden");
    toggleBtn.style.position = "fixed";
  } else {
    toggleImg.src = "images/icon-menu.svg";
    sideMenue.classList.add("hidden");
    overlay.classList.add("hidden");
    toggleBtn.style.position = "static";
  }
});
