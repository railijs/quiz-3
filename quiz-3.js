const response = await fetch("questions.json");
const questions = await response.json();

// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  toggleTheme.checked;
  html.dataset.theme = "dark";
}

const main = document.getElementById("main");

questions.forEach((question) => {
  const form = document.createElement("form");
  main.appendChild(form);

  const qText = document.createElement("h2");
  form.appendChild(qText);
  qText.textContent = question["question"];

  const conatiner = document.createElement("div");
  conatiner.className = "grid-container";
  form.appendChild(conatiner);

  const allAnswers = question.answers;

  allAnswers.forEach((answer) => {
    console.log(answer);
    const label = document.createElement("label");
    conatiner.appendChild(label);
    label.textContent = answer;

    const input = document.createElement("input");
    input.name = question.answers;
    input.type = "radio";
    label.appendChild(input);
  });
});
