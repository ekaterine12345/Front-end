console.log(5);

let promise = new Promise(function(resolve, reject) {

    setTimeout( () => reject(new Error("oop!")), 1000);

   //resolve("done!");
   reject(new Error("oop"));
   setTimeout(() => resolve("HI"), 1000);
}).finally( () => {
    console.log("loading");
}).then(result => console.log(result))
.catch(error => console.log(error))

// abrunebs marto erts
console.log(promise);

// promise.then(

//     result => alert(result),

//     error => alert(error)
// );


// promise.catch(


//  alert   
// );

promise.then(null, alert);
// promise.finally( () => );

async function hello_fun(){

    let promise = new Promise( (resolve, reject) =>
    {
        setTimeout( () => resolve("DOne"), 1000);
    })

    let result = await promise;
    console.log(result);
} 

hello_fun();

// async function showAlert(){
//     let response = await fetch("")
// }

(async ()  => {
    //let test = await loadData();
})();

class Waiter{

    async wait(){
    //     return await Promise.resolve();
        
}
}

new Waiter()
    .wait()
    .then(alert)


async function welcome(){

    try{
            //return await Promise.resolve('ddddddddone');
            let result = await fetch("https://translate.ge/word/");
    }
    catch(err){
            console.log(err);
    }

}

welcome();

const posts = [
    {
        id : 1,
        Title : "T1",
        author: 'au1'
    },
    {
        id : 2,
        Title : "T12",
        author: 'au12'
    },
    {
        id : 3,
        Title : "T13",
        author: 'au13'
    }
]

function getPostByID(id){
    return new Promise((resolve, reject) => {   

        setTimeout( () => {

            let post = posts.find(post => post.id ===id );
            if (post) resolve (post);
            else
                reject(new Error("oopppp"));
        }, 1000);

    })
}

function getAuthor(post){

    return new Promise((resolve, reject)=> {


        setTimeout( ()=> {
            let authorInfo = authors.find(person => person.name === post.author)

            if (authorInfo) resolve(authorInfo)
            else
            reject(new Errpr("oooop"))
        }, 1000)
    })

}

const authors =[
    {
        name: "zgapari",
        id:1
    },

    {
        name: "zgapari2",
        id:2
    },

    {
        name: "zgapari1000",
        id:3
    }
]

getPostByID(1)
    .then( post => { 
        console.log(post)
    })
    .then( author => {
        console.log(author);
    })
    .catch(err)
    {
        console.log(err);
    }
    
    
