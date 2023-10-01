const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps'],
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн'],
    },
];

console.log(
    users.map((user) => ({
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length,
    }))
);
