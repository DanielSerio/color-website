"use strict";
window.addEventListener('load', init);
function init() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('search');
    const button = document.getElementById('searchBtn');
    input.addEventListener('keyup', (e) => {
        const { value } = e.target;
        if (/^\s*(#?)([A-F0-9]{2}){3}\s*$/i.test(value)) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = input.value;
        window.location.href = `/color/${value.replace(/(#|\s+)/g, '')}`;
    });
}
//# sourceMappingURL=index.js.map