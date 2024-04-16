document.getElementById('searchBtn').addEventListener('click', () => {
    let searchText = document.getElementById('searchInput').value;
    fetchMovies(searchText);
});

function fetchMovies(searchText) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchText}`)
        .then(response => {
            displayMovies(response.data.results);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Released: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
            <p>${movie.overview}</p>
        `;
        container.appendChild(movieElement);
    });
}
