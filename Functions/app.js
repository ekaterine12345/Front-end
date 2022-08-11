function func(){
    document.write("<h1> hi</h1>");
}
func();
func();

/*anonimuri  pinqcia*/
var func2 = function(){
    document.write("<h1> hello anonimus function</h1>");
}
func2();

var tesetvat = func();
// tesetvat();
function func4(x, y){
    if (y===undefined) y=x++;
   console.log(x, y);

}
func4(10);
func4(6, "A");


//პარამეტრებს რომ არ ველოდებოდეთ მაგრამ მივიღოთ
function func5(){

    console.log(arguments);

    for (let i=0; i<arguments.length; i++)
        console.log(arguments[i]);
}

func5(10, 15, 20);

function square(x, y){
    return x*y;
}

var k=square(2, 4);
console.log("square =",k);

function message(hours, func1) {
    var result = func1(hours);
    console.log(result);
}

function welcome(time){
    if (time<12) return "morning";
    if (time>12) return "night";
}

message(10, welcome);

var s = 10;
let b =12;
function area(){
    var x1=11;
    let p=1.5;
    seen1 =123;
    console.log("s = ",s, x1, b, p);
}
area();
console.log(seen1);

(function(x){
    console.log("bbbbbbb", x);
}(1121)
);

function getFactorial(n){
    if (n==1) return 1;
    return n*getFactorial(n-1);

}

function getPibonachi(n)
{
    if (n==1 || n==2) return n;
    return getPibonachi(n-1)+getPibonachi(n-2);
}


var m = getFactorial(5);
console.log(m);

m=getPibonachi(5);
console.log(m);


function func7(){
    console.log("one");
    func7 = function (){
        console.log("two")
    }
}

func7();
func7();
func7();
func7();

console.log(h);
var h='test';
console.log(h);

const API='api';
let test ='test';

//  ES5
var name='eka';
var age=19;
//  ES6
const namConst="ekaterine";
let ageLet = 20;

function clos(retine){
    var a='test';
    return function(birth){
        var age = 2022-birth;
        console.log((retine- age)+a)
    }
}

var clos2 =clos(35);
clos2(1990);

function reverse_string(str){
    console.log([str.split("")].reverse().join(""));
    var newStrr="";
    for (var i=str.length-1; i>=0; i--)
    newStrr+=str[i];

    console.log(newStrr);
}

reverse_string('hello123');