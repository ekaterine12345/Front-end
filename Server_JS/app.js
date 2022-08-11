//console.log(100);
//let fetchData =fetch(url, [Options]);

// let response = fetch(url);

// console.log(response.headers.get('Content-type'));


// for (let [key, value] of response.headers ){
//     console.log(`${key}  =  ${value}`);
// }

// // if (response.ok)  {
// //     let text = await response.text();
// //     let json = await response.json();
// //     let form = await response.form();
// //     let blob = response.blob(); // binaruli data
// //     let buufer = response.buufer(); // dabali donis binaruli data
// //     let bd = response.body();
// // }
// // else{
// //     console.log(response.status);
// // }


// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// let user = {
//     name : 'kato',
//     lastname : 'gurgenidze'
// };

// let regUser = await fetch(url,
//     {
//         method : 'POST',
//         headers: {
//             'Content-type': 'application/json; charSetf: UTF-8'
//         },
//         body : JSON.stringify(user)
//     });




// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data => data.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));


// async function getUsers(){
//     let url = 'https://jsonplaceholder.typicode.com/posts';
//     try{
//         let res = await fetch(url);
//         return res.json();
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }    

// async function renderUSERS(){
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlRender = `
//         <div class ="user"> 
//         <h2> ${user.title}</h2>
//         <h2> ${user.id}</h2>

//          </div>
//         `;

//         html += htmlRender;
//     });
//     let wrapper = document.querySelector(".users");
//     wrapper.innerHTML = html;
//     console.log(10000);
// }

// renderUSERS();



async function getUsers2(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    try{
        let res = await fetch(url);
        return await res.json();
    }
    catch(err)
    {
        console.log(err);
    }
}   


async function getPosts(){

    let url =  'https://jsonplaceholder.typicode.com/posts';
    
    try{
        let res = await fetch(url);
        return await res.json()
    }
    catch(err)
    {
        console.log(err);
    }
    
}

async function renderUsers(){

   // let users = await getUsers2();
    // let posts = await getPosts();

    console.log("userss ", users);
    Promise.all([getUsers2(), getPosts() ])
    .then((result) => {
        console.log(result, "result");

        const user_post ={};
            result[1].forEach(post => {
              
                if (user_post[post.userId]) user_post[post.userId].push(post);
                else
                {
                    user_post[post.userId] = 5; /// aq ragaca unda
                }
            });
    })
    .catch(err => console.log(err))

}