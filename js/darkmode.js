function darkMode() {
  let element = document.body;
  element.classList.toggle("dark");
  const button = document.getElementById("toggle");
  let dark = element.classList.contains("dark");
  button.textContent = dark ? "🌚" : "🌞";
  localStorage.setItem('darkMode', dark);
}

// Apply the dark mode state on page load
let dark = JSON.parse(localStorage.getItem('darkMode'));
if (dark) {
  document.body.classList.add("dark");
  const button = document.getElementById("toggle");
  button.textContent = "🌚";
}

console.log(dark);


// A function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  const modeType = localStorage.getItem('darkMode')
  if (modeType === null || modeType === undefined){
    return [];
  }
  console.log(modeType)
}