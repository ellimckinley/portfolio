// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function darkMode() {
  let element = document.body;
  element.classList.toggle("dark");
  const button = document.getElementById("toggle");
  let dark = element.classList.contains("dark");
  button.textContent = dark ? "🌚" : "🌞";
  localStorage.setItem('darkMode', dark);
}

let dark = JSON.parse(localStorage.getItem('darkMode'));
console.log(dark);


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  const modeType = localStorage.getItem('darkMode')
  if (modeType === null || modeType === undefined){
    return [];
  }
  console.log(modeType)
}