// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);
    
// }

// const greetings = 'Hello World';
// for (const greet of greetings) {
//     // console.log(`Each char of ${greet}`);
// }

// // Maps

// const map = new Map()
// map.set('IN' , "India  " ) 
// map.set('USA' , "United states of America")
// map.set('Fr' , "French")
// map.set('In' , "India")



// const coding = ["js" , "ruby" , "java" , "cpp"]

// coding.forEach((items , index , arr)=>{
//     console.log(items , index , arr );
// })


// const coding = ["js" , "ruby" , "java" , "cpp"]

// coding.forEach((items , index , arr)=>{
//     console.log(items , index , arr);
// })


// const myCoding = [
//     {
//         languageName: "JavaScript",
//         languageFileName: "Js"
//     },
//     {
//         languageName: "Java",
//         languageFileName: "Java"
//     },
//     {
//         languageName: "Python",
//         languageFileName: "python"
//     }
// ]

// myCoding.forEach((value)=>{
//     console.log(value.languageName);
// })



// const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumber.filter( (num) => {
//     return num > 4
// } )
// console.log(newNumbers);


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNum.filter( (num) => {
//     return num > 4
// } )
// console.log(newNumbers);

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]


// const newNumbers = [];

// myNumbers.forEach( (num) => {
//     if(num > 4) {
//         newNumbers.push(num)
//     }
// } )

// console.log(myNumbers)


// **********************************************//

/*const coding = ["JS", "python" , "java" , "cpp" , "ruby"]

const value = coding.forEach( (item) => {
    console.log(item);
} )

console.log(value);*/

/*const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNum.filter( (num) => {
   return num > 5
} )

 console.log(newNum);*/



/*const program = [1,2,3,4,5,6,7,8,9,10,11,222,33,444,55];

const newProgram = program.filter( (prog) => {
    return prog > 6
} )
console.log(newProgram);*/


/*const books = [
    {title: 'Book one', genre: 'Fiction' , publish: '1981', edition:'2004' },
    {title: 'Book two', genre: 'NOn-Fiction' , publish: '1992', edition:'2008' },
    {title: 'Book three', genre: 'History' , publish: '1989', edition:'2007' },
    {title: 'Book four', genre: 'NON-Fiction' , publish: '2009', edition:'2010' },
    {title: 'Book five', genre: 'Science' , publish: '1981', edition:'2014' },
    {title: 'Book six', genre: 'Fiction' , publish: '1989', edition:'2003' },
    {title: 'Book seven', genre: 'Bangle' , publish: '2004', edition:'2014' },
    {title: 'Book eight', genre: 'History' , publish: '2006', edition:'2009' },
    {title: 'Book nine', genre: 'Fiction' , publish: '2000', edition:'2002' },
    {title: 'Book Ten', genre: 'Fiction' , publish: '1981', edition:'2018' },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {
    return bk.publish <= 2000 && bk.genre === 'History' 
})

console.log(userBooks);


const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumber.map( (num) => {
//     return num + 10
// } )

const newNumbers = myNumber
                    .map ((num) => num * 10)
                    .map ((num) => num + 1)

console.log(newNumbers);*/


/*const myNum = [1,2,3];

const myTotal = myNum.reduce( function (acc , currVal) {
    console.log(`acc: ${acc} currVal: ${currVal}`);

    return acc + currVal
} , 0)

console.log(myTotal);*/

let num = 30.9000000001;
let num2 = 2;

/***console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));***/

// math power
console.log(Math.pow(4, 2));

// math Root

