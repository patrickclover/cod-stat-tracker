const ActualItems = [
  {
    bg:
      "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
    items: ["here's the", "KD's For The Boys", "Enjoy"],
  },
  {
    bg:
      "https://images.unsplash.com/photo-1599398012169-b8b87755ddce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1500&q=80",
    items: ["Weekly: 0.9", "Jamie", "LT"],
  },
  {
    bg:
      "https://images.unsplash.com/photo-1599397976795-4f638f02a5ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    items: ["Weekly: 0.9", "Patrick", "LT"],
  },
  {
    bg:
      "https://images.unsplash.com/photo-1600614565704-2f9940946fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    items: ["Weekly: 0.9", "Joe", "LT"],
  },
  {
    bg:
      "https://images.unsplash.com/photo-1598744401489-b0787914d9a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    items: ["Weekly: 0.9", "Lewis", "LT"],
  },
];

const rootNode = document.getElementById("root");

const childGenerator = (bg, items) => {
  const element = document.createElement("div");
  element.className = "item";
  element.style.backgroundImage = `url('${bg}')`;
  element.onclick = () => element.classList.toggle("open");
  element.addEventListener("transitionend", (e) => {
    if (!e.propertyName.includes("flex")) return;
    element.classList.toggle("open-active");
  });
  element.innerHTML = items.map((item) => `<p>${item}</p>`).join("");
  return element;
};

ActualItems.forEach((node) =>
  rootNode.appendChild(childGenerator(node.bg, node.items))
);
