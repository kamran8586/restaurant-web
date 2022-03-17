const menuItems = document.querySelector(".menu-items");
const hamburgerLines = document.querySelector(".hamburger-lines");
const loader = document.querySelector(".loader");
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
const goToTop =  document.querySelector(".go-to-top");
const foodMenuItemsContainer = document.querySelector(
  ".food-menu-items-container"
);
const hamburgerLinesText = hamburgerLines.innerHTML;

/**
 * Add hamburger functionality for rexponsiveness
 */
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
  window.onscroll = () => {};
}, 1000);

window.onscroll = () => {
  window.scroll(0, 0);
};
foodMenuItemsContainer.scrollLeft = 0;
rightButton.addEventListener("click", function (e) {
  foodMenuItemsContainer.scrollLeft += 300;
  console.log(e);
});
leftButton.addEventListener(
  "click",
  () => (foodMenuItemsContainer.scrollLeft -= 300)
);
window.scroll(0, 0);
goToTop.addEventListener("click", (e) => {
  window.scroll(0, 0);
  console.log(e);
});
