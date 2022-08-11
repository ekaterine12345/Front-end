const el = document.getElementById('title');
el.innerHTML='new title';
console.log(el);

const el1 = document.getElementsByName('tt')[0];
console.log(el1);

const el2 = document.getElementsByTagName('h2')[2];
console.log(el2);

const el3 = document.getElementsByClassName('hi')[0];
console.log(el3);

const el4 = document.querySelector('.title');
// const el5 = document.querySelector('#title');
console.log(el4.parentNode);

const el5 = document.querySelector('section');
// const el5 = document.querySelector('#title');
console.log(el5.children);

const e = document.querySelector('.title');
console.log(e.previousSibling);

const divEL = document.createElement("div");
divEL.innerHTML="This div tag is created in JS";
el5.appendChild(divEL);


const span = document.createElement("span");
span.innerHTML="This span would be deleted in JS";
el5.appendChild(span);

el5.removeChild(span);


console.log(divEL);


const parentEL = document.querySelector('section');
const wrapperEL = document.querySelector('.wrapper');
wrapperEL.appendChild(divEL);