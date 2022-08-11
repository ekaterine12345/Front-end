let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    };

let sum = (function(){

 var my_sum = 0;   
    console.log(salaries);
    for (var property1 in salaries)
        my_sum += salaries[property1];

return my_sum;
}());

console.log(sum);