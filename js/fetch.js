// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch (url)
// .then (response => response.json())
// .then(json => console.log(json))

function loadData (){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch (url)
    .then (response => response.json())
    .then(json => console.log(json))

}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => displayUsers(data) )
}

function displayUsers(data){
    console.log(data);
}




