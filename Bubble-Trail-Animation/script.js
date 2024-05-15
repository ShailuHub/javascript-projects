const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xCor = event.offsetX;
  const yCor = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xCor + "px";
  spanEl.style.top = yCor + "px";
  bodyEl.appendChild(spanEl);
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
