let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    };

console.log("Old menu - ", menu);

(function(menu)
{
    for (var property1 in menu) 
    if ( (typeof menu[property1] ) == 'number' ) menu[property1] *=2;
}(menu) ) ;


console.log("New menu - ", menu);