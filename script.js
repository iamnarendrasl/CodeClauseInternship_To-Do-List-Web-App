const toDoList = document.getElementById('to-do-list');
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const noTasksMessage = document.getElementById('no-tasks-message');
const viewTasksIcon = document.getElementById('view-tasks');
const collapsibleSections = document.getElementById('collapsible-sections');
const hamburger = document.querySelector('.hamburger');

// Add task function
function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');

    listItem.appendChild(deleteButton);
    toDoList.appendChild(listItem);
    taskInput.value = '';

    deleteButton.addEventListener('click', () => {
        toDoList.removeChild(listItem);
        toggleNoTasksMessage();
    });

    toggleNoTasksMessage();
}

// Toggle no tasks message
function toggleNoTasksMessage() {
    if (toDoList.children.length === 0) {
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
    }
}

// Add event listener to add task button
addTask
