// Global Variables
const todoList = JSON.parse(localStorage.getItem('todoList')) || []; // Load tasks from local storage
const todoSymbol = Symbol('todo'); // Unique symbol for identifying tasks

// Arrow Function to create a new to-do item
const createTodo = (task) => {
    return {
        id: todoSymbol,
        task: task,
        completed: false,
        timestamp: Date.now() // Track the creation time of the task
    };
};

// Function to add a new to-do item to the list
function addTodo(task) {
    if (task) {
        let newTodo = createTodo(task);
        todoList.push(newTodo);
        updateLocalStorage();
        renderTodoList();
    } else {
        alert("Please enter a task.");
    }
}

// Function to remove a to-do item from the list
function removeTodo(index) {
    todoList.splice(index, 1);
    updateLocalStorage();
    renderTodoList();
}

// Function to edit a to-do item in the list
function editTodo(index) {
    const newTask = prompt("Edit your task:", todoList[index].task);
    if (newTask) {
        todoList[index].task = newTask;
        updateLocalStorage();
        renderTodoList();
    }
}

// Function to toggle completion status of a to-do item
function toggleComplete(index) {
    todoList[index].completed = !todoList[index].completed;
    updateLocalStorage();
    renderTodoList();
}

// Function to render the to-do list to the UI
function renderTodoList(filter = '') {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear existing list

    const filteredTodos = todoList.filter(todo => todo.task.toLowerCase().includes(filter.toLowerCase()));

    filteredTodos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        if (todo.completed) {
            todoItem.classList.add('completed');
        }

        const todoText = document.createTextNode(todo.task);
        todoItem.appendChild(todoText);

        const buttonContainer = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.className = 'icon-btn complete-btn';
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.title = "Mark as Complete";  // Tooltip for Complete button
        completeButton.onclick = () => toggleComplete(index);

        const editButton = document.createElement('button');
        editButton.className = 'icon-btn edit-btn';
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.title = "Edit Task";  // Tooltip for Edit button
        editButton.onclick = () => editTodo(index);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'icon-btn delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.title = "Delete Task";  // Tooltip for Delete button
        deleteButton.onclick = () => removeTodo(index);

        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(buttonContainer);

        todoListElement.appendChild(todoItem);
    });

    updateProgress();
}

// Function to update local storage
function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Function to search tasks
function searchTodo() {
    const searchTerm = document.getElementById('search-todo-input').value;
    renderTodoList(searchTerm);
}

// Function to sort tasks by time
function sortTodosByTime() {
    todoList.sort((a, b) => a.timestamp - b.timestamp);
    renderTodoList();
}

// Function to update progress
function updateProgress() {
    const progressElement = document.getElementById('progress');
    const totalTasks = todoList.length;
    const completedTasks = todoList.filter(todo => todo.completed).length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    progressElement.innerHTML = `Progress: ${completedTasks}/${totalTasks} tasks completed (${progress.toFixed(2)}%)`;
}

// Scope Variables and Event Listeners
{
    let addTodoButton = document.getElementById('add-todo-btn');
    let newTodoInput = document.getElementById('new-todo-input');
    let searchTodoInput = document.getElementById('search-todo-input');
    let sortButton = document.getElementById('sort-btn');

    // Add task when button is clicked
    addTodoButton.addEventListener('click', () => {
        let task = newTodoInput.value.trim();
        addTodo(task);
        newTodoInput.value = '';
    });

    // Add task when Enter key is pressed
    newTodoInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            let task = newTodoInput.value.trim();
            addTodo(task);
            newTodoInput.value = '';
        }
    });

    // Search tasks when typing in search input
    searchTodoInput.addEventListener('keyup', searchTodo);

    // Sort tasks by time when button is clicked
    sortButton.addEventListener('click', sortTodosByTime);

    // Render the list on page load
    renderTodoList();
}
