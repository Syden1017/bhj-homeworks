const editor = document.getElementById("editor");

function loadText() {
  const savedText = localStorage.getItem("text");
  if (savedText) {
    editor.value = savedText;
  }
}

function saveText() {
  localStorage.setItem("text", editor.value);
}

document.addEventListener("DOMContentLoaded", loadText);

editor.addEventListener("input", saveText);
