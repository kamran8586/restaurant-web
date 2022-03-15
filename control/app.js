const menuItems = document.querySelector(".menu-items");
const hamburgerLines = document.querySelector(".hamburger-lines");
const loader = document.querySelector(".loader");
const hamburgerLinesText = hamburgerLines.innerHTML;
hamburgerLines.addEventListener("click", (e) => {
  menuItems.classList.toggle("show-nav");
  menuItems.classList.contains("show-nav")
    ? (hamburgerLines.innerHTML = "&times")
    : (hamburgerLines.innerHTML = hamburgerLinesText);
});

document.body.addEventListener("click", function (e) {
  if (e.target != this) return;
  menuItems.classList.remove("show-nav");
});
setTimeout(() => {
  loader.style.display = "none";
  window.onscroll = () => {}
}, 1000);

window.onscroll = () => { window.scroll(0, 0); };