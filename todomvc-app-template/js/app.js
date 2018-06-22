var todoList = [
	{
		name: 'Taste JavaScript',
		completed: true,
	},
	{
		name: 'Buy a Unicorn',
		completed: false,
	}
];
var filter = 'all';

renderTodoList();

function renderTodoList() {
	const ul = document.getElementById('todo-list');
	ul.innerHTML = '';
	const filteredList = filterTodoList(filter);
	for (let i = 0; i < todoList.length; i++) {
		const li = document.createElement('li');
		if (filteredList[i].completed) {
			li.setAttribute('class', 'completed');
		}
		li.innerHTML = `<div class="view">
			<input 
				class="toggle" type="checkbox" 
				${todoList[i].completed ? 'checked' : ''}
				onchange="changeTodoStatus(${i})"
			>
			<label>${todoList[i].name}</label>
			<button class="destroy" onclick="removeTodo(${i})"></button>
		</div>`;
		ul.appendChild(li);
	}
	updateTodoCounts();
}

function filterTodoList(filter) {
	switch (filter) {
		case 'completed': 
			return todoList.filter(function(todo) {
				return todo.completed;
			})
		case 'incompleted':
			return todoList.filter(function(todo) {
				return !todo.completed;
			})
		default:
			return todoList;
	}
}

function changeFilter(f) {
	filter = f;
	renderTodoList();
}

function getIncompletedTodos() {
	let count = 0;
	for (let i = 0; i < todoList.length; i++) {
		if (!todoList[i].completed) {
			count++;
		}
	}
	return count;
}

function updateTodoCounts() {
	const todoCount = document.getElementById('todo-count');
	todoCount.innerHTML = `<strong>${getIncompletedTodos()}  item left</strong>`;
}
function addTodo() {
	const input = document.getElementById('new-todo');
	const newTodo = {
		name: input.value,
		completed: false,
	}
	todoList.push(newTodo);
	renderTodoList();
	input.value = '';
}

function removeTodo(i) {
	todoList.splice(i, 1);
	renderTodoList();
}

function changeTodoStatus(i) {
	const item = todoList[i];
	item.completed = !item.completed;
	renderTodoList();
}

function clearCompleted() {
	const newTodoList = []
	for(let i = 0; i < todoList.length; i++) {
		if(!todoList[i].completed) {
			newTodoList.push(todoList[i]);
		}
	}
	todoList = newTodoList;
	renderTodoList();
}
