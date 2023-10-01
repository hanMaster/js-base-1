'use strict';

const ToDoList = {
    tasks: [],
    secuence: 0,
    getNextId() {
        this.secuence++;
        return this.secuence;
    },
    addTask(title, priority) {
        this.tasks.push({
            title,
            priority,
            id: this.getNextId(),
        });
    },
    removeTaskById(id) {
        this.tasks = this.tasks.filter((i) => i.id !== id);
    },
    updateTaskById(id, title, priority) {
        const task = this.tasks.find((t) => t.id === +id);
        if (task) {
            task.title = title ?? task.title;
            task.priority = priority ?? task.priority;
        }
    },
    sortByPriority() {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

const NewTaskList = {
    tasks: [],
    secuence: 0,
    getNextId: ToDoList.getNextId,
    addTask(title, description, priority) {
        this.tasks.push({
            title,
            description,
            priority,
            id: this.getNextId(),
        });
    },
    removeTaskById: ToDoList.removeTaskById,
    updateTaskById(id, title, description, priority) {
        const task = this.tasks.find((t) => t.id === +id);
        if (task) {
            task.title = title ?? task.title;
            task.description = description ?? task.description;
            task.priority = priority ?? task.priority;
        }
    },
    sortByPriority: ToDoList.sortByPriority,
};

const addTask = ToDoList.addTask;

NewTaskList.addTask('Task 1', 'Task1 description', 13);
NewTaskList.addTask('Task 2', 'Task2 description', 15);
NewTaskList.addTask('Task 3', 'Task3 description', 2);

NewTaskList.updateTaskById(2, 'Updated task');
NewTaskList.updateTaskById(3, undefined, 'Updated task description', 8);

NewTaskList.removeTaskById(1);
NewTaskList.sortByPriority();

console.log(ToDoList.tasks);
console.log(NewTaskList.tasks);
