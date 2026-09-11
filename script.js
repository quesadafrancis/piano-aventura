const startButton = document.querySelector("#startButton");
const welcomeMessage = document.querySelector("#welcomeMessage");
const currentYear = document.querySelector("#currentYear");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-toggle__icon");
const themeText = themeToggle.querySelector(".theme-toggle__text");

const savedTheme = localStorage.getItem("piano-aventura-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Activar modo claro" : "Activar modo oscuro"
  );
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeText.textContent = isDark ? "Modo claro" : "Modo oscuro";
}

setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  setTheme(nextTheme);
  localStorage.setItem("piano-aventura-theme", nextTheme);
});

currentYear.textContent = new Date().getFullYear();

startButton.addEventListener("click", () => {
  welcomeMessage.textContent = "¡Excelente! Tu aventura musical acaba de comenzar. 🎹";
  startButton.textContent = "¡A tocar!";
});
