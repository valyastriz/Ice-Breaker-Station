const quoteElement = document.getElementById('quoteDisplay');
const factElement = document.getElementById('factDisplay');
const jokeElement = document.getElementById('jokeDisplay')

//render useless fact
function renderUselessFact(data) {
    document.getElementById('factDisplay').innerText = `$(data)`;
}

function checkFactType() {
    const selectedType = localStorage.getItem('selectedType');
    const data = localStorage.getItem(selectedType);

    if (selectedType === 'uselessFact') {
        renderUselessFact(data);
    }

    else {
        console.error("Unknown Type");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    checkFactType();
});