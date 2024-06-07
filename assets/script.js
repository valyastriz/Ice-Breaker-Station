
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

function inspirQuoteClick(event) {
    event.preventDefault();

    fetch(`https://zenquotes.io/api/quotes`)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        if (!data || !data.text) {
            console.log('No results returned');
            return;
        }
        newQuote = data.text;
        console.log(newQuote);
        return;
    })
    .catch(function(error) {
        console.error('Error fetching inspirational quote: ', error);
    });
}



function getRandomQuote(event) {
    event.preventDefault();

    const inspirAPIURL = "https://zenquotes.io/api/quotes";
    getQuote(inspirAPIURL);
}

async function getQuote(url)
    {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }


uselessFactEl.addEventListener('click', uselessFactClick);
inspirQuoteEl.addEventListener('click', getRandomQuote);
