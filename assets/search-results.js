const displayEl = document.getElementById('displayResult');
const backBtnEl = document.getElementById('backBtn');

//render useless fact
function renderUselessFact(data) {
    const factDiv = document.createElement('div');
    const factEl = document.createElement('h1');
    factEl.classList.add(
        'text-white',
        'text-2xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    factEl.innerText = `${data}`;
    factDiv.appendChild(factEl);
    displayEl.appendChild(factDiv);
}

//render dad joke
function renderDadJoke(data) {
    const dadJokeDiv = document.createElement('div');
    const dadJokeEl = document.createElement('h1');
    dadJokeEl.classList.add(
        'text-white',
        'text-2xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    dadJokeEl.innerText = `${data}`;
    dadJokeDiv.appendChild(dadJokeEl);
    displayEl.appendChild(dadJokeDiv);
}

//render randomQuote fact
function renderRandomQuote(data) {
    const quoteDiv = document.createElement('div');
    const quoteEl = document.createElement('h1');
    quoteEl.classList.add(
        'text-white',
        'text-2xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    const authorEl = document.createElement('h2');
    authorEl.classList.add(
        'text-white',
        'text-1xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    quoteEl.innerText = `${data.content}`;
    authorEl.innerText = `~ ${data.author}`;
    quoteDiv.appendChild(quoteEl);
    quoteDiv.appendChild(authorEl);
    displayEl.appendChild(quoteDiv);
}

//render randomRiddle fact
function renderRiddle(data) {
    const riddleDiv = document.createElement('div');
    const riddleEl = document.createElement('h1');
    riddleEl.classList.add(
        'text-white',
        'text-2xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    const answerEl = document.createElement('h2');
    answerEl.classList.add(
        'text-white',
        'text-1xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    console.log(data);
    console.log(data.question, data.answer);
    riddleEl.innerText = `${data[0].question}`;
    answerEl.innerText = `~ ${data[0].answer}`;
    riddleDiv.appendChild(riddleEl);
    riddleDiv.appendChild(answerEl);
    displayEl.appendChild(riddleDiv);
}

function checkFactType() {
    const selectedType = localStorage.getItem('selectedType');
    const data = JSON.parse(localStorage.getItem(selectedType));
    if (selectedType === 'uselessFact') {
        renderUselessFact(data.text);
    } else if (selectedType === 'randomQuote') {
        renderRandomQuote(data);
    } else if (selectedType === 'dadJoke') {
        renderDadJoke(data);
    } else if (selectedType === 'riddle') {
        renderRiddle(data);
    } else {
        console.error('Unknown Type');
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
