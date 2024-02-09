// const promise = new Promise( function (resolve , reject) {

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)

// } )

// promise.then(function(){
//     console.log("Promise consumed ");
// })


//  new Promise(function(resolve , reject){
    
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },2000)
// }).then (function(){
//     console.log('Async 2 resolve');
// })

// function promiseThree(){
//     const promise = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             let error = true
//             if(!error) {
//                 resolve({userName:"Foysal" , password: "123"})
//             } else {
//                 reject('ERROR: Somthing went wrong')
//             }
//         },1000)
//     })

//     return promise                               
// }

// async function promiseThree() {
//      awite 
// }







// /********************************/ Data type

let crs = document.querySelector('.cursor');
let main = document.querySelector('.mainDiv');
let body = document.querySelector('body');

body.addEventListener('mousemove' , function(det){
    crs.style.left = det.x + 'px'
    crs.style.top = det.y + 'px'
})

