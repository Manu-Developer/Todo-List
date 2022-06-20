const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");

const addTodo = (event) => {
	//Prevent form from submitting
	event.preventDefault();

	//Todo DIV
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//Create LI
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	//Check Mark Button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></li>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	//Trash Button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></li>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	//Append to List
	todoList.prepend(todoDiv);

	//Clear Todo Input Value
	todoInput.value = "";
};

const deleteCheck = (e) => {
	const item = e.target;

	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;

		//Animation
		todo.classList.add("fall");
		todo.addEventListener("transitionend", () => {
			todo.remove();
		});
	}

	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
};

const filterTodo = (e) => {
	const todos = todoList.childNodes;

	todos.forEach((todo) => {
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;

			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;

			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
		}
	});
};

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
