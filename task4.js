// 4 . Create a simple to-do list using JavaScript and the DOM.

document.addEventListener("DOMContentLoaded", function () {
    // Create main elements
    const container = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "To-Do List";
    const taskInput = document.createElement("input");
    taskInput.id = "taskInput";
    taskInput.placeholder = "Enter a task";
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    const taskList = document.createElement("ul");
    taskList.id = "taskList";

    // Append elements to the container
    container.appendChild(title);
    container.appendChild(taskInput);
    container.appendChild(addTaskButton);
    container.appendChild(taskList);
    document.body.appendChild(container);

    // Add event listener to button
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    });
});