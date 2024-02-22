fetch('https://jsonplaceholder.typicode.com/todos/1')
.then (res => res.json())
.then (json => console.log(json));

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then (res => res.json())
.then (json => console.log(json));
