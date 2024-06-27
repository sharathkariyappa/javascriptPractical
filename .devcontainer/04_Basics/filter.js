// using filter

// const coding = ["java","javaScript","php","python","c++"]

// coding.forEach( (languages) => {                                // if we do not want to store  the values in the variable
//     console.log(languages);                                     // then we use forEach loop or iteraton
// })

// const prog = coding.forEach( (lang)=> {                            // if we declare the  variable to store the result
//     console.log(lang)
// })
// console.log(prog);                                                 // if we console this we get an undefined, to tackle this we use filter

// filter.// easy  to use

// const prog = coding.filter( (items) => {return items})    // here we declare variable to store result. // if we use parenthesis we must use return
// console.log(prog)                                                      // returns the values in array


// real -usage of filter function

const myNums = [1,2,3,4,5,6,7,8,9,10]
let newNums = myNums.filter( (num) => {                       // use return inside the braces
    return num > 4
})
// console.log(newNums)

newNums = myNums.filter( (num) => num > 5 )                 // here not used braces so didnt used return keyword
// console.log(newNums)

// alternate of filter, if we use for each to get same results

const mynewNum = []                                         // 1st we declare empty array
myNums.forEach( (nums) => {
    if(nums > 5)                                            // apply condition inside 
        mynewNum.push(nums)                                 // push values to empty array
})
// console.log(mynewNum)                                        // this is more complex than the filter function


// ******************************************************2nd part *******************************************************//


// lets take an example to array of object

const books = [
    {
        title: "book-one", genre: "fiction", publish: 1981, edition: 2004
    },
    {
        title: "book-two", genre: "non-fiction", publish: 1992, edition: 2008
    },
    {
        title: "book-three", genre: "history", publish: 1999, edition: 2007
    },
    {
        title: "book-four", genre: "non-fiction", publish: 1989, edition: 2010
    },
    {
        title: "book-five", genre: "science", publish: 2009, edition: 2014
    },
    {
        title: "book-six", genre: "fiction", publish: 1987, edition: 2010
    },
    {
        title: "book-seven", genre: "history", publish: 1986, edition: 1996
    },
]

// let newbooks = books.filter( (bk) => {                        // we can easily fetch the object  values form the array of objects
//     return bk.genre =="history"
// })
// console.log(newbooks)

const newbooks = books.filter( (bk) => {                        // we can easily fetch the object  values form the array of objects
    return bk.genre =="history" && bk.publish ==1999
})
console.log(newbooks)

