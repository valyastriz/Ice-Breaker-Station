const quoteElement = document.getElementById('quoteDisplay');
const factElement = document.getElementById('factDisplay');
const jokeElement = document.getElementById('jokeDisplay');

//render useless fact
function renderUselessFact(data) {
    factElement.innerText = `${data}`;
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