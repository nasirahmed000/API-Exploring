document.getElementById('fetchUser').addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            displayUser(data.results[0]);
        })
        .catch(error => {
            console.error('Failed to fetch user:', error);
        });
}

function displayUser(user) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.large}" alt="Profile Picture">
    `;
}

// Fetch a user on initial load
fetchRandomUser();
