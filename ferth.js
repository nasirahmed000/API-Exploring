fetch('https://api.example.com/data', {
    method: 'GET', // The HTTP method
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parses the JSON response body
})
.then(data => {
    console.log(data); // Here's your data
})
.catch(error => {
    console.error('There was a problem with your fetch operation:', error);
});
