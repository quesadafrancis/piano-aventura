const startButton = document.querySelector("#startButton");
const welcomeMessage = document.querySelector("#welcomeMessage");
const currentYear = document.querySelector("#currentYear");

currentYear.textContent = new Date().getFullYear();

startButton.addEventListener("click", () => {
  welcomeMessage.textContent = "¡Excelente! Tu aventura musical acaba de comenzar. 🎹";
  startButton.textContent = "¡A tocar!";
});
