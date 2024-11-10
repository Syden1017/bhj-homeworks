const tooltipElements = document.querySelectorAll(".has-tooltip");

tooltipElements.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    const existingTooltip = document.querySelector(".tooltip_active");
    if (existingTooltip) {
      existingTooltip.remove();
    }

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = element.getAttribute("title");

    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY}px`;

    tooltip.classList.add("tooltip_active");

    document.body.appendChild(tooltip);
  });
});
