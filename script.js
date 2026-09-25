const videoInput = document.querySelector("#videoUpload");
const videoPlayer = document.querySelector("#presentationVideo");
const uploadStatus = document.querySelector("#uploadStatus");
let selectedVideoUrl;

document.querySelector("#currentYear").textContent = new Date().getFullYear();

videoInput.addEventListener("change", () => {
  const [videoFile] = videoInput.files;
  if (!videoFile) return;

  if (!videoFile.type.startsWith("video/")) {
    uploadStatus.textContent = "Por favor, selecciona un archivo de video válido.";
    videoInput.value = "";
    return;
  }

  if (selectedVideoUrl) URL.revokeObjectURL(selectedVideoUrl);
  selectedVideoUrl = URL.createObjectURL(videoFile);
  videoPlayer.src = selectedVideoUrl;
  videoPlayer.load();
  uploadStatus.textContent = `Video seleccionado: ${videoFile.name}`;
});

window.addEventListener("beforeunload", () => {
  if (selectedVideoUrl) URL.revokeObjectURL(selectedVideoUrl);
});
