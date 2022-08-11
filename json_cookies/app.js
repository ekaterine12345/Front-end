// {
//     "name" : "Ekaterine",
//     "age" : 19,

// }

let user = {
    name :"Ekaterine",
    married : "no",
    age : 19
}


localStorage.setItem('userData', JSON.stringify(user));
let userData = JSON.parse( localStorage.getItem('userData'));
console.log("სახელი = ", userData.name);


let user_json =  JSON.stringify(user);
console.log(user);

let userObj = JSON.parse(user_json);
console.log(user_json);
console.log("name = ", userObj.name);


let expire = new Date();
expire.setHours(expire.getHours() + 4);
//document.cookie = `login=user123; expires=${expire.toUTCString()}; path=/shop; domain=api.site.ge; secure=true`;
document.cookie = `login=user123; expires=${expire.toUTCString()};`;
document.cookie = `password=pass123; expires=${expire.toUTCString()};`;

let cook1 = document.cookie.split(';');
for (let i=0; i<cook1.length; i++)
{
    let parts = cook1[i].split('=');
    let name = parts[0];
    let value = parts[1];
    console.log("cook ", name, value);
}
    

console.log(document.cookie);
// console.log(localStorage);
localStorage.setItem('user', 'Ekaterine23');
localStorage.setItem('password', 'blalba');
localStorage.setItem('age', '25');
//localStorage.removeItem('password');
//localStorage.clear();


sessionStorage.setItem('user', 'Ekaterine23');
sessionStorage.setItem('password', 'blalba');
sessionStorage.setItem('age', '25');


let age = localStorage.getItem('age');
age += 10;

console.log(age);
//console.log(localStorage.getItem('user_json'));

let users =[
    {id:1, name: "n1"},
    {id:2, name: "ppp"},
    {id:3, name: "n13333"},
];

// let result = users.find(function(item, index, array)){

// };

let userItem  = users.find(item => item.name === 'n122');
let userfindIndex = users.findIndex(x => x.id === 4); 
console.log(userItem , userfindIndex);

// let result = users.filter(function(item, index, array)){

// };

let userFilter = users.filter( x => x.name = "n1");
console.log(userFilter);

let userMap = users.map( x => {

console.log(x.name);

}
);

let arr =[1, 2, 3, 4, 5];
let result = arr.reduce( (sum, current ) => sum + current);
console.log(result);

let count =0;
let resultCount = arr.map(item => {
    count += item;
}
)

let people = ['gio', 'nina', 'tea', 'sopi'].map( item => item.length
);

console.log(people);