let menuBtn = document.querySelector(".ls-menuIcon");

let menuIcon = document.querySelector(".ls-menuIcon i");
let menuLinks = document.querySelector(".ls-menuLinks");

menuBtn.addEventListener("click", () => {
  let hasClass = menuIcon.classList.contains("fi-sr-menu-burger");
  ("fi-sr-menu-burger");
  if (hasClass) {
    menuIcon.classList.remove("fi-sr-menu-burger");
    menuIcon.classList.add("fi-sr-cross");
    menuLinks.classList.add("active");
  } else {
    menuIcon.classList.remove("fi-sr-cross");
    menuIcon.classList.add("fi-sr-menu-burger");
    menuLinks.classList.remove("active");
  }
});
