export class Todo {
    #completed = false;
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.doneStatus = false;
        project.addTodo(this);
    }

    get data() {
        return {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
        }
    }

    toggleCompletion() {
        if (this.#completed) {
            this.#completed = false;
            return false;
        } else {
            this.#completed = true;
            return true;
        }
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addTodo(todo) {
        this.items.push(todo);
    }
}


