const value = document.querySelector(".dropdown__value");
const chosenCode = Array.from(document.querySelectorAll(".dropdown__item"));

function openMenu() {
  document
    .querySelector(".dropdown__list")
    .classList.add("dropdown__list_active");
}

function closeMenu() {
  document
    .querySelector(".dropdown__list")
    .classList.remove("dropdown__list_active");
}

value.addEventListener("click", openMenu);

chosenCode.forEach((el, index) => {
  el.onclick = () => {
    closeMenu();
    value.textContent = chosenCode[index].textContent;
    return false;
  };
});
