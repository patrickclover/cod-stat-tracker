const items = document.querySelectorAll(".item");

// function tglOpen() {
//   console.log('hello');
// }

// items.forEach(item =>item.addEventListener('click', tglOpen));

function toggleOpen() {
  console.log("clicked");
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
    console.log(e);
  }
}

items.forEach((item) => item.addEventListener("click", toggleOpen));
items.forEach((item) => item.addEventListener("transitionend", toggleActive));
