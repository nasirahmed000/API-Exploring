document.getElementById('newQuoteButton').addEventListener('click', fetchNewQuote);

function fetchNewQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayQuote(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayQuote(quoteData) {
    const quoteDisplayDiv = document.getElementById('quoteDisplay');
    quoteDisplayDiv.innerHTML = `
        <p>"${quoteData.content}"</p>
        <p><strong>- ${quoteData.author}</strong></p>
    `;
}

// Fetch a new quote on initial load
fetchNewQuote();
