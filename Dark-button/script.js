const checkBoxEl = document.querySelector("#checkbox");
const bodyEl = document.querySelector("#body");

checkBoxEl.checked = localStorage.getItem("mode");

toggleButton();

function toggleButton() {
  if (checkBoxEl.checked) {
    console.log(checkBoxEl.checked);
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

checkBoxEl.addEventListener("input", () => {
  localStorage.setItem("mode", checkBoxEl.checked);
  toggleButton();
});
