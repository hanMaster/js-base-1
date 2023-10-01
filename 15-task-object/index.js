'use strict';

const ToDoList = {
    tasks: [],
    secuence: 0,
    getNextId: function () {
        this.secuence++;
        return this.secuence;
    },
    addTask: function (title, priority) {
        this.tasks.push({
            title,
            priority,
            id: this.getNextId(),
        });
    },
    removeTaskById: function (id) {
        this.tasks = this.tasks.filter((i) => i.id !== id);
    },
    updateTaskById: function (id, title, priority) {
        const task = this.tasks.find((t) => t.id === +id);
        if (task) {
            task.title = title ?? task.title;
            task.priority = priority ?? task.priority;
        }
    },
    sortByPriority: function () {
        return this.tasks.sort((a, b) => a.priority - b.priority);
    },
};

ToDoList.addTask('task1', 6);
ToDoList.addTask('task2', 4);
ToDoList.addTask('task3', 1);

ToDoList.removeTaskById(2);

ToDoList.updateTaskById(3, undefined, 3);
ToDoList.updateTaskById(3, 'NewTitle');

ToDoList.sortByPriority();
console.log(ToDoList.tasks);
