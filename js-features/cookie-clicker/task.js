let cookieButton = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let clickingSpeed = document.getElementById("clicker_speed");
let isIncreasing = true;
let lastClickTime = 0;
let clickSpeed = 0;

cookieButton.addEventListener("click", () => {
  const currentTime = Date.now();
  counter.innerHTML = parseInt(counter.innerHTML) + 1;

  if (isIncreasing) {
    cookieButton.style.width = "220px";
  } else {
    cookieButton.style.width = "200px";
  }

  isIncreasing = !isIncreasing;

  if (lastClickTime !== 0) {
    const timeDiff = (currentTime - lastClickTime) / 1000;
    clickSpeed = 1 / timeDiff;
  }

  lastClickTime = currentTime;
  clickingSpeed.textContent = clickSpeed.toFixed(2);
});
