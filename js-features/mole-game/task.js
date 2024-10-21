let score = 0;
let misses = 0;
const deadDisplay = document.getElementById("dead");
const lostDisplay = document.getElementById("lost");
const holes = document.querySelectorAll(".hole");

getHole = (index) => document.getElementById(`hole${index}`);

holes.forEach((hole, index) => {
  hole.addEventListener("click", () => {
    if (hole.classList.contains("hole_has-mole")) {
      deadDisplay.textContent = ++score;
    } else {
      lostDisplay.textContent = ++misses;
    }

    if (score === 10) {
      alert("Вы победили");
      score = 0;
      misses = 0;
      deadDisplay.textContent = score;
      lostDisplay.textContent = misses;
    } else if (misses === 5) {
      alert("Вы проиграли");
      score = 0;
      misses = 0;
      deadDisplay.textContent = score;
      lostDisplay.textContent = misses;
    }
  });
});
