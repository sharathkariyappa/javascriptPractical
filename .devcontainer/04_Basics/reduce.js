// reduce function usecase

const myNum = [1, 2, 3]                             // initialize a simple array

// const newNum = myNum.reduce( (acc, curr) => acc + curr, 0)          // it takes accumulator and current value, current value will initialized 0
// console.log(newNum)                                                 // it updates every iteration

const newNum = myNum.reduce(function (acc, curr) {
    console.log(`the accumulator is ${acc} and currentvalue is ${curr} `)           // this is the normal function
    return acc + curr
}, 0)
console.log(newNum)