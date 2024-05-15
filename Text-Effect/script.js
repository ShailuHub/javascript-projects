const containerEl = document.querySelector(".container");

const carrerArray = [
  "Youtuber",
  "Full Stack Developer",
  "Backend Developer",
  "React Developer",
  "Javascript Developer",
  "Node.js Developer",
  "Instructor",
];

let currCharIndex = 0;

function updateCarrer(carrerIndex) {
  if (carrerIndex >= carrerArray.length) {
    carrerIndex = 0;
    return;
  }
  currCharIndex++;
  containerEl.innerHTML = `<h1>I am ${
    ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"].includes(
      carrerArray[carrerIndex].slice(0, 1)
    )
      ? "an"
      : "a"
  } ${carrerArray[carrerIndex].slice(0, currCharIndex)}</h1>`;

  if (currCharIndex === carrerArray[carrerIndex].length) {
    currCharIndex = 0;
    carrerIndex++;
  }
  setTimeout(() => {
    updateCarrer(carrerIndex);
  }, 200);
}

updateCarrer(0);
