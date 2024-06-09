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

//render randomQuote fact
function renderRandomQuote(data) {
    const quoteDiv = document.createElement('div');
    const quoteEl = document.createElement('h1');
    quoteEl.classList.add('text-white', 'text-2xl', 'text-slate-50', 'tracking-wide', 'font-bold');
    const authorEl = document.createElement('h2');
    authorEl.classList.add('text-white', 'text-1xl', 'text-slate-50', 'tracking-wide', 'font-bold')
    quoteEl.innerText = `${data.content}`;
    authorEl.innerText = `~ ${data.author}`;
    quoteDiv.appendChild(quoteEl);
    quoteDiv.appendChild(authorEl);
    displayEl.appendChild(quoteDiv);
}

function checkFactType() {
    const selectedType = localStorage.getItem('selectedType');
    const data = JSON.parse(localStorage.getItem(selectedType));
    if (selectedType === 'uselessFact') {
        renderUselessFact(data.text);
    }
    if (selectedType === "randomQuote") {
        renderRandomQuote(data);
    }
    else {
        console.error("Unknown Type");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkFactType();
});