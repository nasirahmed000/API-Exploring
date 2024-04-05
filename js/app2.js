document.getElementById('fetchButton').addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayUser(data.results[0]);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayUser(user) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.large}" alt="User image">
    `;
}
