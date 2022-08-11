let count = 0;


let count_EL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
function increment(){
    count++;
    count_EL.innerText = count;
    console.log(count);
}

function save(){
   let countStr = count + " => ";
   saveEL.innerHTML += countStr;
}