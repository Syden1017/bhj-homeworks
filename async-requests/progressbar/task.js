document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();
  const progress = document.getElementById("progress");
  const status = document.getElementById("status");

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total;
      progress.value = percentComplete;
    }
  });

  xhr.onload = function () {
    if (xhr.status === 200) {
      status.innerHTML = "Файл успешно загружен!";
    } else {
      status.innerHTML = "Ошибка при загрузке файла: " + xhr.statusText;
    }
  };

  xhr.onerror = function () {
    status.innerHTML = "Ошибка сети";
  };

  xhr.send(formData);
});
