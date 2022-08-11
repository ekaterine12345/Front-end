let person1 = { name: "giorgi", age: 25 };
let person2 = { name: "nino", age: 30 };
let person3 = { name: "petre", age: 28 };
let person4 = {name: "Ekaterine", age: 19};
let person5 = {name: "Jhon", age: 23};
let person6 = {name: "Pete", age: 29};
let person7 = {name: 'Mary', age: 45};

let users = [ person1, person2, person3, person4, person5, person6, person7];


// ვარიანტი 1
let names = (function(my_users, key)
{
var ans = [];

for (i=0; i<my_users.length; i++)
    ans.push(my_users[i][key]);

return ans;
}(users, "name"));


console.log("Names of Users (Solution with function) = ", names);

// ვარიანტი 2
let names2 = users.map(({name}) => name );
console.log("Names of Users (Solution with map) = ", names2);
alert(names2);