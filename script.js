const navBack = document.querySelector(".navigation__background");
const checkBox = document.querySelector(".navigation__checkbox");
const hiddenLinks = document.querySelectorAll(".hidden-link");

const closedBackground = function () {
  if (!navBack.classList.contains("visible")) {
    navBack.classList.add("visible");
  } else {
    navBack.classList.remove("visible");
  }
};

checkBox.addEventListener("change", function () {
  closedBackground();
});

hiddenLinks.forEach((link) =>
  link.addEventListener("click", function () {
    closedBackground();
    checkBox.checked = false;
  })
);

console.log("Hola");
