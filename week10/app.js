// console.log("winner!");
var str = "ekaterine";
var num =100;
var check = true;
var isull = null;
var isUnd = undefined;
console.log(typeof str, str);
// var isString = "hello", isnumber=7, ischeck=true, isNull=null, isUnd=undefined;
str=100;

// console.log(str);
// console.log(num);
// console.log(check);
console.log(typeof str, `str = ${str}`);

str='last change';
console.log(typeof str, str);


var a=5, b=5;

if (a>b) console.log(`a = ${a} is bigger than ${b}`);
else
if (a == b) console.log("equals");
else
console.log(`b = ${b} is bigger ${a}`)

console.log("con" + "catination");

a = '10';
b=8, c=2;
console.log(b+c+a); // pirvel shesakrebis tips eqceva kuradgeba
console.log(b+c+ Number(a) ) ;
// console.log(+"10");


var hours='19';
hours=Number(hours);

if (typeof hours === 'number' && hours<15) console.log("nummm11");


if (hours<=12)  console.log("dila");
else
if (hours>12 && hours<=18) console.log("shuadge");
else
console.log("sagamo");



