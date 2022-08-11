var i=0;

document.write("<h3> While Loop </h3> ");
while (i<10){
    document.write(i, " ");
    i++;

}
document.write("<br>");
document.write("<h3> Do-While Loop </h3> ");
do{
    document.write(i, " ");
    i--;
}
while(i>=0);


document.write("<h3> For Loop </h3> ");
var j=0;
for (j; j<5; j++)
{
    document.write(j, " ");
}

document.write("<h3> Array </h3>");
var arr =[1, 2, 3, undefined, 4, 5 , 12, "fverver"];
for (i=0; i<arr.length; i++)
{
   document.write(arr[i], " ");
}

document.write("<h3>  Foreach Array </h3>");
arr.forEach(element => document.write(element, " " ));

document.write("<h3>   for in Array </h3>");
for (var k in arr){
    document.write(arr[k], " ");
}

document.write("<h3>   for of Array </h3>");
for (var iterator of arr){
    document.write(iterator, " ");
}

var newArr = arr.join(" ");
newArr = arr.reverse();
newArr = arr.sort();
newArr = arr.concat([ 20, 25, 32]);
newArr = arr.slice(0, 5);
console.log(newArr);
// newArr = arr.push('new');
console.log(arr.pop());
var person = {firstname : "ekaterine",
 lastname : "gurgenidze",
  age : 19,
   university: "BTU",
    address: {country : "Georgia", city: "Tbilisi"},

    countAge: function(){
        console.log(this.age +1);
    },


    getAge: function(){
        return this.age+10;
    }
};
console.log(person.firstname, person.lastname, person.age, person.address.city);

person.name = "kato";
//delete person.firstname;
if ('firstname' in person) console.log(person["firstname"])
else
console.log("person has no age");



// for (const key in person){
// console.log(" *", person[key],  " *")
// }

console.log(person.hasOwnProperty('name'));
person.countAge();
console.log("new age =", person.getAge())
// console.log(person.hasOwn)

function Animal(name, age){
this.name = name;
this.age = age;
}
var cat = new Animal("Garfild", 12);
var dog = new Animal("Senbernar", 5);
console.log(cat);
console.log(dog);

var arrPerson =["n19090", "n2efwf", "nfew3", "n4", "n5000"];
var personObj = [];

for (i=0; i<arrPerson.length; i++)
{
     if (String( arrPerson[i] ).length >= 4) personObj.push(arrPerson[i]);
     //console.log(arrPerson[i]);
}
console.log(personObj);