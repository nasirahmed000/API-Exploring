const user = {id: 1 , name : 'gorib Aamir ', job : 'Actor '};
// json , Javascript Object notation 
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);

const shop = {
    owner : 'Alia',
    addrerss : {
        street : 'kochuhet bajar road number 07',
        city : 'Ranbir',
        country: 'Bangladesh'

    },
    products : [ 'Laptop' , 'mic', 'monitor', 'keyboard'],
    revenue : 450000,
    isOpen : true,
    isNew : false
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject);