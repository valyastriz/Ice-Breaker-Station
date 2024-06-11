const displayEl = document.getElementById('displayResult');
const backBtnEl = document.getElementById('backBtn');

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
    authorEl.classList.add('text-white', 'text-1xl', 'text-slate-50', 'tracking-wide', 'font-bold');
    quoteEl.innerText = `${data.content}`;
    authorEl.innerText = `~ ${data.author}`;
    quoteDiv.appendChild(quoteEl);
    quoteDiv.appendChild(authorEl);
    displayEl.appendChild(quoteDiv);
}

function renderRandomJoke(data) {
    const jokeDiv = document.createElement('div');
    const setupEl = document.createElement('h1');
    setupEl.classList.add('text-white', 'text-2xl', 'text-slate-50', 'tracking-wide', 'font-bold');
    const punchlineEl = document.createElement('h2');
    punchlineEl.classList.add('text-white', 'text-1xl', 'text-slate-50', 'tracking-wide', 'font-bold');
    setupEl.innerText = 
    punchlineEl.innerText = 
    jokeDiv.appendChild(setupEl);
    jokeDiv.appendChild(punchlineEl);
    displayEl.appendChild(jokeDiv);
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
    if (selectedType === 'randomJoke') {
        renderRandomJoke(data);
    }
    else {
        console.error("Unknown Type");
    }
}

function handleBackBtnClick(event) {
    event.preventDefault();
    //redirect to a index.html page
    window.location.href = 'index.html';
    return;
}

document.addEventListener('DOMContentLoaded', () => {
    checkFactType();

    backBtnEl.addEventListener('click', handleBackBtnClick);
});