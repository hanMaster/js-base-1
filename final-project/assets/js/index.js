'use strict';

import { rerender } from './render.js';
import { loadData } from './utils.js';

let habbits = [];

const form = document.querySelector('.habbit__form');

form.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get('comment'));
};

(() => {
    habbits = loadData();
    rerender(habbits[0].id, habbits);
})();
