// using filter

const coding = ["java","javaScript","php","python","c++"]

// coding.forEach( (languages) => {                                // if we do not want to store  the values in the variable
//     console.log(languages);                                     // then we use forEach loop or iteraton
// })

// const prog = coding.forEach( (lang)=> {                            // if we declare the  variable to store the result
//     console.log(lang)
// })
// console.log(prog);                                                 // if we console this we get an undefined, to tackle this we use filter

// filter.

const prog = coding.filter( (items) => {return items})    // here we declare variable to store result. // if we use parenthesis we must use return
console.log(prog)                                                      // returns the values in array
