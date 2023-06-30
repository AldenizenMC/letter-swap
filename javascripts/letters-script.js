import { Letters } from "./letters.js";

const table = document.getElementById("letter-list-table");

let i = 0;
for (const letter of Letters) {
    i++;
    addValueToTable(table, i, letter);
}

/**
 * ### Adds value to table
 * @param {HTMLTableElement} $el
 * @param {Number} number
 * @param {{ original: string, modified: string, block: string }} value
 */
function addValueToTable($el, number, value) {
    const wrapper = document.createElement("tr");
    const num = document.createElement("th");
    const latin = document.createElement("td");
    const modified = document.createElement("td");
    const blocked = document.createElement("td");

    num.appendChild(document.createTextNode(number));
    latin.appendChild(document.createTextNode(value.original));
    modified.appendChild(document.createTextNode(value.modified));
    blocked.appendChild(document.createTextNode(value.block));

    wrapper.appendChild(num);
    wrapper.appendChild(latin);
    wrapper.appendChild(modified);
    wrapper.appendChild(blocked);

    $el.appendChild(wrapper);
}
