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
    const item = {
        id: Date.now(),
        text
    };
    todos.push(item);
    localStorage.setItem('todos', JSON.stringify(todos));

    addTodoItem(item);
    input.value = '';
}

function addTodoItem(item) {
    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = item.id;

    const span = document.createElement('span');
    span.textContent = item.text;

    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', removeTodo);

    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
}

function removeTodo(event) {
    const li = event.target.parentElement;
    const id = li.dataset.id;

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => String(t.id) !== id);
    localStorage.setItem('todos', JSON.stringify(todos));

    li.remove();
}
