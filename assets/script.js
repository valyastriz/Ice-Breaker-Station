
const uselessFactEl = document.getElementById('uselessFact');
let uselessFact;

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

uselessFactEl.addEventListener('click', uselessFactClick);