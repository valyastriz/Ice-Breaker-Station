const displayEl = document.getElementById('displayResult');
const backBtnEl = document.getElementById('backBtn');

// render useless fact
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

// render dad joke
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

// render randomQuote fact
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

// render randomRiddle fact
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
    console.log(data[0].question, data[0].answer);
    riddleEl.innerText = `${data[0].question}`;
    answerEl.innerText = `~ ${data[0].answer}`;
    riddleDiv.appendChild(riddleEl);
    riddleDiv.appendChild(answerEl);
    displayEl.appendChild(riddleDiv);
}

function renderRandomJoke(data) {
    console.log("new", data);
    const jokeDiv = document.createElement('div');
    const setupEl = document.createElement('h1');
    setupEl.classList.add(
        'text-white',
        'text-2xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    const punchlineEl = document.createElement('h2');
    punchlineEl.classList.add(
        'text-white',
        'text-1xl',
        'text-slate-50',
        'tracking-wide',
        'font-bold'
    );
    console.log("new", data);
    setupEl.innerText = `${data.setup}`;
    punchlineEl.innerText = `${data.punchline}`;
    jokeDiv.appendChild(setupEl);
    jokeDiv.appendChild(punchlineEl);
    displayEl.appendChild(jokeDiv);
}

function checkFactType() {
    const selectedType = localStorage.getItem('selectedType');
    let data;
    console.log('in checkfactype', selectedType);
    if (selectedType === 'uselessFact') {
        data = JSON.parse(localStorage.getItem('uselessFact'));
        renderUselessFact(data.text);
    } else if (selectedType === 'randomQuote') {
        data = JSON.parse(localStorage.getItem('randomQuote'));
        renderRandomQuote(data);
    } else if (selectedType === 'randomJoke') {
        console.log("again", selectedType);
        data = JSON.parse(localStorage.getItem('randomJoke'));
        console.log(data);
        renderRandomJoke(data);
    } else if (selectedType === 'dadJoke') {
        data = JSON.parse(localStorage.getItem('dadJoke'));
        renderDadJoke(data);
    } else if (selectedType === 'riddle') {
        data = JSON.parse(localStorage.getItem('riddle'));
        renderRiddle(data);
    } else {
        console.error('Unknown Type');
    }
}

function handleBackBtnClick(event) {
    event.preventDefault();
    // redirect to a index.html page
    window.location.href = 'index.html';
    return;
}

document.addEventListener('DOMContentLoaded', () => {
    checkFactType();
    backBtnEl.addEventListener('click', handleBackBtnClick);
});
