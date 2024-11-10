const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      taskInput.value = "";

      const task = document.createElement("div");
      task.className = "task";
      task.innerHTML = `
          <div class="task__title">${taskText}</div>
          <a href="#" class="task__remove">&times;</a>
      `;

      const removeButton = task.querySelector(".task__remove");
      removeButton.addEventListener("click", function (e) {
        e.preventDefault();
        task.remove();
      });

      taskList.appendChild(task);
    }
  }
});
