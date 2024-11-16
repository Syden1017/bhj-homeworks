function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=/";
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((res, item) => {
    const [key, value] = item.split("=");
    return key === name ? decodeURIComponent(value) : res;
  }, "");
}

function isModalClosed() {
  return getCookie("modalClosed") === "true";
}

function closeModal() {
  const modal = document.getElementById("subscribe-modal");
  modal.classList.remove("modal_active");
  setCookie("modalClosed", "true", 7);
}

if (!isModalClosed()) {
  const modal = document.getElementById("subscribe-modal");
  modal.classList.add("modal_active");
}

document.querySelector(".modal__close").addEventListener("click", closeModal);
