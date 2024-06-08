
const uselessFactEl = document.getElementById('uselessFact');
let uselessFact;
const inspirQuoteEl = document.getElementById('inspirQuote');
let newQuote;


//function to handle the click on the useless facts card
function uselessFactClick(event) {
    event.preventDefault();

    fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        if (!data || !data.text) {
            console.log('No results returned');
            return;
        }
        uselessFact = data.text;
        console.log(uselessFact);
        return;
    })
    .catch(function(error) {
        console.error('Error fetching random useless fact: ', error);
    });
}

async function getRandomQuote(event) {
    event.preventDefault();
    const targetUrl = 'https://api.quotable.io/random';
    const resp = await fetch(targetUrl);
    const data = await resp.json();

    if (!data || !data.content) {
        console.log('No results returned');
        return;
    }
    newQuote = data.content;
    console.log(newQuote);
    console.log('data',data);
    return;
}

uselessFactEl.addEventListener('click', uselessFactClick);
inspirQuoteEl.addEventListener('click', getRandomQuote);


// new api for random quote https://api.quotable.io/random