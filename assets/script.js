
const uselessFactEl = document.getElementById('uselessFact');
let uselessFact;

function uselessFactClick(event) {
    event.preventDefault();
    let fact = '';
    axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`).then(resp => 
    {
        fact = resp.data.text;
        console.log(fact);
    });

    
    // fetch(`https://cors-anywhere.herokuapp.com/https://useless-facts-api.herokuapp.com/api/v2/facts/random`)
    // .then(function(resp) {
    //     return resp.json();
    // })
    // .then(function(data) {
    //     console.log(data);
    //     if (!data || !data.text) {
    //         console.log('No results returned');
    //         return;
    //     }
    //     uselessFact = data.text;
    //     console.log('Random Useless Fact: ', uselessFact);
    //     return;
    // })
    // .catch(function(error) {
    //     console.error('Error fetching random useless fact: ', error);
    // });
}

uselessFactEl.addEventListener('click', uselessFactClick);