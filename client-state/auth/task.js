const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = signinForm.elements.login.value;
  const password = signinForm.elements.password.value;

  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/auth",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      if (data.success) {
        localStorage.setItem("userId", data.user_id);

        welcomeBlock.classList.add("welcome_active");
        userIdSpan.textContent = data.user_id;
      } else {
        alert("Неверный логин/пароль");
      }
    } else {
      console.error("Ошибка с сервером:", xhr.statusText);
    }
  };

  xhr.send(JSON.stringify({ login, password }));
});

const storedUserId = localStorage.getItem("userId");
if (storedUserId) {
  welcomeBlock.classList.add("welcome_active");
  userIdSpan.textContent = storedUserId;
}
