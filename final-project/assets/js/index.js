'use strict';

import { loadData } from './utils.js';

let habbits = [];

(() => {
    habbits = loadData();
})();

console.log(habbits);
