import './css/reset.css';
import './css/index.css';
import { Project, Todo } from './js/todos';

document.addEventListener('DOMContentLoaded', () => {
	const projectList = {};
	projectList['default'] = new Project('default');


	document.querySelector('#create-todos').addEventListener('click', (e) => toggleForm(e));
	document.querySelector('#form').addEventListener('submit', (e) => {
		formSubmit(e, projectList);
		refreshForms(e, projectList)
	});
	document.querySelector('#refresh-todos').addEventListener('click', (e) => refreshForms(e, projectList));
})


function toggleForm(e) {
	document.querySelector('#form').classList.toggle('hidden');
}


function formSubmit(e, projectList) {
	e.preventDefault();
	const formElement = e.target;
	const title = formElement.querySelector('#title').value;
	const description = formElement.querySelector('#description').value;
	const dueDate = formElement.querySelector('#due-date').value;
	const priority = formElement.querySelector('#priority').value;
	const selectedProject = document.querySelector('#view-form').value;
	const project = projectList[selectedProject]

	new Todo(title, description, dueDate, priority, project);
	console.log(projectList);
}


function refreshForms(e, projectList) {
	const selectedProject = document.querySelector('#view-form').value;
	const project = projectList[selectedProject];
	const tbodyElement = document.querySelector('tbody');
	const todoArray = project.items;

	tbodyElement.innerHTML = '';

	for (const todo of todoArray) {
		const trElem = document.createElement('tr');
		const title = document.createElement('td');
		const description = document.createElement('td');
		const dueDate = document.createElement('td');
		const priority = document.createElement('td');
		const done = document.createElement('td');

		title.textContent = todo.title;
		description.textContent = todo.description;
		dueDate.textContent = todo.dueDate;
		priority.textContent = todo.priority;

		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.checked = todo.checkCompletion();
		done.append(checkbox);

		trElem.append(title, description, dueDate, priority, done);
		tbodyElement.append(trElem);

		checkbox.addEventListener('change', (e) => checkForm(e, todo));
	}
}


function checkForm(e, todo) {
	const checkbox = e.target;
	const parentTR = checkbox.closest('tr');
	const title = parentTR.querySelector('td').textContent;
	todo.toggleCompletion();	
}