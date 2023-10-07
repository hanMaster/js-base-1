'use strict';

import { rerender } from './render.js';
import { isValid, loadData, saveData } from './utils.js';

let habbits = [];
let selectedHabbitId;

export const page = {
    menu: document.querySelector('.menu__list'),
    newHabbitBtn: document.querySelector('.menu__add'),
    header: {
        title: document.querySelector('.title'),
        progressPercent: document.querySelector('.progress__percent'),
        progressBar: document.querySelector('.progress__cover-bar'),
    },
    body: {
        main: document.querySelector('main'),
        days: document.querySelector('.habbit__days'),
        nextDay: document.querySelector('.next__day'),
    },
    popup: {
        cover: document.querySelector('.cover'),
        icons: document.querySelectorAll('.icon'),
        closeBtn: document.querySelector('.popup__close'),
        form: document.querySelector('.popup__form'),
        iconInput: document.getElementById('icon'),
    },
};

export const setSelectedHabbitId = (id) => {
    selectedHabbitId = id;
    refresh();
};

const form = document.querySelector('.habbit__form');
const formInput = document.querySelector('.input_icon');

export const refresh = () => rerender(selectedHabbitId, habbits);

const addDay = (comment) => {
    const habbit = habbits.find((h) => h.id === selectedHabbitId);
    if (habbit) {
        habbit.days.push({ comment });
    }
    saveData(habbits);
};

export const removeDay = (dayNumber) => {
    const habbit = habbits.find((h) => h.id === selectedHabbitId);
    if (habbit) {
        habbit.days.splice(dayNumber - 1, 1);
    }
    saveData(habbits);
};

formInput.addEventListener('input', () => formInput.classList.remove('error'));

form.onsubmit = function (e) {
    e.preventDefault();
    if (isValid(this)) {
        addDay(this['comment'].value.trim());
        this.reset();
        refresh();
    }
};

const togglePopup = () => {
    page.popup.cover.classList.toggle('cover_hidden');
};

page.newHabbitBtn.addEventListener('click', () => togglePopup());
page.popup.closeBtn.addEventListener('click', () => togglePopup());

page.popup.icons.forEach((btn) =>
    btn.addEventListener('click', function () {
        if (this.classList.contains('icon_active')) {
            return;
        }
        page.popup.iconInput.value = this.dataset.icon;
        const activeIcon = document.querySelector('.icon.icon_active');
        activeIcon.classList.remove('icon_active');
        this.classList.add('icon_active');
    })
);

page.popup.form.onsubmit = function (e) {
    e.preventDefault();
    if (isValid(this)) {
        addHabbit(this);
        this.reset();
        togglePopup();
    }
};

const addHabbit = (form) => {
    const data = new FormData(form);
    const icon = data.get('icon');
    const name = data.get('name').trim();
    const target = Number(data.get('target'));
    habbits.push({
        id: habbits.length + 1,
        icon,
        name,
        target,
        days: [],
    });
    saveData(habbits);
    if (habbits.length === 1) {
        selectedHabbitId = habbits[0].id;
        page.body.main.style.display = 'block';
    }
    refresh();
};

(() => {
    habbits = loadData();
    if (habbits.length) {
        const urlId = document.location.hash.slice(1);
        if (urlId) {
            selectedHabbitId = Number(urlId);
        } else {
            selectedHabbitId = habbits[0].id;
        }
        refresh();
    } else {
        page.body.main.style.display = 'none';
    }
})();
