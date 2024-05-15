const btnEl = document.querySelector(".button");

document.addEventListener("mousemove", (event) => {
  let xCor = event.pageX - btnEl.offsetLeft;
  let yCor = event.pageY - btnEl.offsetTop;
  btnEl.style.setProperty("--xpos", xCor + "px");
  btnEl.style.setProperty("--ypos", yCor + "px");
  console.log(btnEl);
});
