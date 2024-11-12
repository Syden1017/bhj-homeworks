const pollTitle = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.onload = function () {
  if (xhr.status === 200) {
    let poll = JSON.parse(xhr.responseText);
    console.log(poll);
    pollTitle.innerHTML = poll.data.title;
    poll.data.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer;
      button.classList.add("poll__answer");
      button.style.margin = "10px";
      button.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан");
      });
      answers.appendChild(button);
    });
  }
};

xhr.send();
