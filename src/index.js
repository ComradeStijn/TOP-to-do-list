import './css/reset.css';
import './css/index.css';
import { Project, Todo } from './js/todos';

document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('#create-todos').addEventListener('click', (e) => toggleForm(e));
	document.querySelector('#form').addEventListener('submit', (e) => formSubmit(e));
})


function toggleForm(e) {
	document.querySelector('#form').classList.toggle('hidden');
}


function formSubmit(e) {
	e.preventDefault();
	const formElement = e.target;
	const title = formElement.querySelector('#title').value;
	const description = formElement.querySelector('#description').value;
	const dueDate = formElement.querySelector('#due-date').value;
	const priority = formElement.querySelector('#priority').value;
	const project = document.querySelector('#view-form').value;

	new Todo(title, description, dueDate, priority, ___________FILLIN);

}