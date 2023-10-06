'use strict';

import { rerender } from './render.js';
import { loadData } from './utils.js';

let habbits = [];

(() => {
    habbits = loadData();
    rerender(habbits[0].id, habbits);
})();
