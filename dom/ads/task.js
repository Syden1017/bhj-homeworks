const rotators = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

function updateSlide() {
  rotators.forEach((rotator, index) => {
    rotator.classList.toggle("rotator__case_active", index === currentIndex);
  });

  const currentRotator = rotators[currentIndex];
  const textColor = currentRotator.getAttribute("data-color");
  const slideDuration = parseInt(currentRotator.getAttribute("data-speed"));

  rotators[currentIndex].style.color = textColor;

  currentIndex++;
  if (currentIndex >= rotators.length) {
    currentIndex = 0;
  }
  setTimeout(updateSlide, slideDuration);
}

updateSlide();
