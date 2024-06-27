// extra more use cases of the filter 
// part 2 of the filter 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = myNum.map( (num) => num + 10)                                          // we can modify the values
// console.log(newnum)

const newNum = myNum.
            map( (num) => num + 10).
            map( (num) => num * 10).
            filter( (num) => num > 150)    // we can add more functions to get results
console.log(newNum)

