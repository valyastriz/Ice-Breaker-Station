
const uselessFactEl = document.getElementById('uselessFact');
let uselessFact;
const inspirQuoteEl = document.getElementById('inspirQuote');
let newQuote;
const jokeModalEl = document.getElementById('jokeModal');
const jokeBtnEl = document.getElementById('jokeBtn')
                    
function openJokeModal(event) {
    console.log('in openjokemodal')
    event.preventDefault();
    jokeModalEl.classList.remove('invisible');
    jokeModalEl.classList.add('visible');
}

//function to handle the click on the useless facts card
function uselessFactClick(event) {
    event.preventDefault();

    //clear local storage so only this result will display on results screen
    localStorage.clear();

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
        localStorage.setItem('selectedType', 'uselessFact');
        localStorage.setItem('uselessFact', JSON.stringify(data));
        //redirect to a search-results page
        window.location.href = 'search-results.html';
        return;
    })
    .catch(function(error) {
        console.error('Error fetching random useless fact: ', error);
    });

    //save the fact to local storage
}

async function getRandomQuote(event) {
    event.preventDefault();
    //clear local storage so only this result will display on results screen
    localStorage.clear();

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
    localStorage.setItem('selectedType', 'randomQuote');
    localStorage.setItem('randomQuote', JSON.stringify(data));
    //redirect to a search-results page
    window.location.href = 'search-results.html';
    return;
}

uselessFactEl.addEventListener('click', uselessFactClick);
inspirQuoteEl.addEventListener('click', getRandomQuote);
jokeBtnEl.addEventListener('click', openJokeModal);


// new api for random quote https://api.quotable.io/random