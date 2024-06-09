const displayEl = document.getElementById('displayResult');

//render useless fact
function renderUselessFact(data) {
    const factDiv = document.createElement('div');
    const factEl = document.createElement('h1');
    factEl.classList.add('text-white', 'text-2xl', 'text-slate-50', 'tracking-wide', 'font-bold');
    factEl.innerText = `${data}`;
    factDiv.appendChild(factEl);
    displayEl.appendChild(factDiv);
}

function checkFactType() {
    const selectedType = localStorage.getItem('selectedType');
    const data = JSON.parse(localStorage.getItem(selectedType));
    if (selectedType === 'uselessFact') {
        renderUselessFact(data.text);
    }
    else {
        console.error("Unknown Type");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('test')
    checkFactType();
});