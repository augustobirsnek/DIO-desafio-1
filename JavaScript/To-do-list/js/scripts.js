const form = document.getElementById('formulario');
const taskList = document.getElementById('lista');

form.onsubmit = function (e) {
 	e.preventDefault();
	const inputField = document.getElementById('tarefa');
	addTarefa(inputField.value);
	form.reset();
};


function addTarefa(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('tarefaItem');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}