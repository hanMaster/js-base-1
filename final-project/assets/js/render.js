'use strict';

import { refresh, removeDay, setSelectedHabbitId, page } from './index.js';

export const rerender = (activeHabbitId, habbits) => {
    const activeHabbit = habbits.find((h) => h.id === activeHabbitId);
    if (activeHabbit) {
        document.location.replace(
            document.location.pathname + `#${activeHabbitId}`
        );
        rerenderMenu(activeHabbit, habbits);
        rerenderHead(activeHabbit);
        rerenderDays(activeHabbit);
    }
};

const rerenderMenu = (activeHabbit, habbits) => {
    for (const habbit of habbits) {
        let existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () =>
                setSelectedHabbitId(habbit.id)
            );
            element.innerHTML = `<img src="assets/img/${habbit.icon}.svg" alt="${habbit.name}" />`;
            page.menu.appendChild(element);
            existed = element;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
};

const rerenderHead = (activeHabbit) => {
    page.header.title.innerText = activeHabbit.name;
    const progress =
        activeHabbit.days.length / activeHabbit.target > 1
            ? 100
            : (activeHabbit.days.length / activeHabbit.target) * 100;
    page.header.progressPercent.innerText = `${progress}%`;
    page.header.progressBar.style.width = `${progress}%`;
};

const handleDeleteDay = (dayNumber) => {
    removeDay(dayNumber);
    refresh();
};

const rerenderDays = (activeHabbit) => {
    page.body.days.innerHTML = '';
    for (const idx in activeHabbit.days) {
        page.body.days.appendChild(
            createDay(Number(idx) + 1, activeHabbit.days[idx].comment)
        );
    }
    page.body.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;
};

const createDay = (id, comment) => {
    const d = document.createElement('div');
    d.classList.add('habbit');
    d.innerHTML = `<div class="habbit__day">День ${id}</div>
    <div class="habbit__comment">${comment}</div>`;
    const btn = document.createElement('button');
    btn.classList.add('habbit__delete');
    btn.addEventListener('click', () => handleDeleteDay(id));
    btn.innerHTML = `<img src="assets/img/delete.svg" alt="Удалить день ${id}" />`;
    d.appendChild(btn);
    return d;
};
