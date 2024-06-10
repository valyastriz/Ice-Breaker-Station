
const uselessFactEl = document.getElementById('uselessFact');
let uselessFact;
const inspirQuoteEl = document.getElementById('inspirQuote');
let newQuote;
const jokeModalEl = document.getElementById('jokeModal');
const jokeBtnEl = document.getElementById('jokeBtn')
const cancelBtnEl = document.getElementById('cancelBtn');
const submitEl = document.getElementById('jokeForm');
const dropdownEl = document.getElementById('dropdown');
                    
function handleSubmit(event) {
    event.preventDefault();
    const selection = document.getElementById('dropdown').value;
    const errorMessageEl = document.getElementById('errorMessage');
    
    if (selection === 'noSelection') {
        errorMessageEl.textContent = "*Please make a selection.";
    } else {
        
        if (selection === 'jokeOfDay') {
            console.log(selection);
            closeJokeModal();
        } else if (selection === 'randomJoke') {
            console.log('randomJoke');
            closeJokeModal();
        } else if (selection === 'dadJoke') {
            console.log('dadJoke');
            closeJokeModal();
        }
        
    }
    
}

function openJokeModal(event) {
    event.preventDefault();
    jokeModalEl.classList.remove('hidden');
}

function closeJokeModal(event) {
    //clear the form fields
    const form = document.querySelector('#dialog-form form');
    if (form) {
        form.reset();
    }
    jokeModalEl.classList.add('hidden');
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
dropdownEl.addEventListener('change', () => {
    const selection = dropdownEl.value;
    const errorMessageEl = document.getElementById('errorMessage');
    if (selection !== 'noSelection') {
        errorMessageEl.textContent = ""; //clear the error message when a valid selection is made, even before submit is clicked
    }
});

uselessFactEl.addEventListener('click', uselessFactClick);
inspirQuoteEl.addEventListener('click', getRandomQuote);
jokeBtnEl.addEventListener('click', openJokeModal);
cancelBtnEl.addEventListener('click', closeJokeModal);
submitEl.addEventListener('submit', handleSubmit);
// new api for random quote https://api.quotable.io/random