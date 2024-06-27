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
console.log(mynewNum)                                        // this is more complex than the filter function