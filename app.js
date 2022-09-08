const navMenu = document.querySelector("#nav-menu");

function openNav() {
  navMenu.style.left = "50%";
  //   navMenu.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  navMenu.style.left = "100%";
  //   navMenu.style.visibility = "hidden";
  document.body.style.overflow = "scroll";
}
