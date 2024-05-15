const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const currDate = document.querySelector("#date");
const year = document.querySelector("#year");

const date = new Date();
monthName.innerText = date.toLocaleString("en", { month: "long" });
dayName.innerText = date.toLocaleString("en", { weekday: "long" });
currDate.innerText = date.getDate();
year.innerText = date.getFullYear();
