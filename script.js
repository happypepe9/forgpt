document.getElementById('add-btn').addEventListener('click', addTodo);

document.addEventListener('DOMContentLoaded', loadTodos);

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(addTodoItem);
}

function addTodo() {
    const input = document.getElementById('new-todo');
    const text = input.value.trim();
    if (text === '') return;

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(text);
    localStorage.setItem('todos', JSON.stringify(todos));

    addTodoItem(text);
    input.value = '';
}

function addTodoItem(text) {
    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = '<span>' + text + '</span> <button onclick="removeTodo(this)">x</button>';
    list.appendChild(li);
}

function removeTodo(button) {
    const li = button.parentElement;
    const text = li.querySelector('span').textContent;

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => t !== text);
    localStorage.setItem('todos', JSON.stringify(todos));

    li.remove();
}
