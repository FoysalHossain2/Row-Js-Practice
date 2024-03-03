const coding = ['js','ruby', 'java', 'çpp', 'python']

const value = coding.forEach(()=>{
    // console.log(value);
    // return items
})
// console.log(value);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter( (num)=> {
//    return num > 4
// })

// console.log(newNum);

const newNum = [];

myNum.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

// console.log(newNum);





// const books = [
//     {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
//     {title: 'BooK Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, },
//     {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, },
//     {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, },
//     {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, },
//     {title: 'Book Seven', genre: 'History', publish: 1986, edition: 2016, },
//     {title: 'Book Eight', genre: 'Non-Fiction', publish: 2011, edition: 2007, },
// ]

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// // userBooks = books.filter( (bk) => {return bk.publish >= 2000 })

// userBooks = books.filter( (bk) => {
//     return bk.publish <= 1995 && bk.genre === "History"
// } )

// console.log(userBooks);



    
/* map */ 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map((num)=>{return num + 10}) 

// chaining Method  
const newNumbers = myNumbers
                .map((num)=> num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)                

// console.log(newNumbers);]

const myNum02 = [1,2,3,,4]

const myTotal = myNum02.reduce(function (acc, curr){
    console.log(`acc: ${acc} and curr:${curr}`);
    return acc + curr
})

console.log(myTotal);
