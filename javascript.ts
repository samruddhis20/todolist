// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Complete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
}

// Function to toggle task completion
function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

// Function to edit a task
function editTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector('span').textContent;
    const newTaskText = prompt('Edit your task:', taskText);

    if (newTaskText !== null) {
        li.querySelector('span').textContent = newTaskText.trim();
    }
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
