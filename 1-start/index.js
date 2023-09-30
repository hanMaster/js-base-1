console.log('Hello world!');

const tasks = ['Задача 1'];

const addToEnd = (task) => {
    tasks.push(task);
};

const deleteTask = (task) => {
    const idx = tasks.indexOf(task);
    if (idx >= 0) {
        tasks.splice(idx, 1);
    }
};

const moveToFirst = (task) => {
    deleteTask(task);
    tasks.unshift(task);
};

addToEnd('Задача 2');
addToEnd('Задача 3');
addToEnd('Еще одна задача');
addToEnd('И еще задача');
console.log(tasks);

console.log('Удаление');
deleteTask('Еще одна задача');
console.log(tasks);

console.log('Приоритет');

moveToFirst('Задача 3');
console.log(tasks);
