let tab = document.querySelectorAll(".tab");
let active = document.querySelector(".tab_active");
let content = document.querySelectorAll(".tab__content");
let contentActiv = document.querySelector(".tab__content_active");

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", toggleActive);
}

function toggleActive() {
  active.classList.remove("tab_active");
  this.classList.add("tab_active");
  active = this;
  let indexTab = [...tab].findIndex((obj) =>
    obj.classList.contains("tab_active")
  );
  let indexContent = [...content].findIndex((obj) =>
    obj.classList.contains("tab__content_active")
  );
  content[indexContent].classList.remove("tab__content_active");
  content[indexTab].classList.add("tab__content_active");
}
