'use strict';

const HABBIT_KEY = 'HABBIT_KEY';

export const loadData = () => {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbits = JSON.parse(habbitsString);
    if (Array.isArray(habbits)) {
        return habbits;
    }
    console.log('Failed to load state');
    return [];
};

export const saveData = (state) => {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(state));
};

export const isValid = (form) => {
    let valid = true;
    const data = new FormData(form);
    for (const pair of data.entries()) {
        if (!pair[1]) {
            form[pair[0]].classList.add('error');
            valid = false;
        }
    }
    return valid;
};
