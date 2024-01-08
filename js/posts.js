function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then (data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for (const post of posts ){
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h4>user-</h4>
        <h5>post title : </h5>
        <p>Description : </p>

        `;
    }
    postContainer.appendChild();


}

loadPosts();

