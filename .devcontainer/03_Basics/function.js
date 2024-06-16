// functions

function myName() {                                  // syntax of function
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("d")
}

// myName()                                            // to execute the function

// function addTwonum(num1,num2) {
//     console.log(num1+num2);
// }
// const result = addTwonum(3,4)                           // variable to store the result this shows the undefined
// console.log(result)


// function addTwonum(num1,num2) {                            // these are the parameters
//     let result = num1+num2;                               // declare seperate variable  
//     return result                                         // return the variable
// }
// const result = addTwonum(2,5)                             // these are the argument we are passing
// console.log(result)


// function simple(username) {
//     return `${username} just logged in`
// }
// console.log(simple("shaddy"));                            // if we pass argument it shows output
// console.log(simple(""));                                  // if we donot pass any argument it shows emplty @begining and shows remain
// console.log(simple());                                    //undefined 

// function simple(username) {

//     // if(username==undefined){                                        // we can also put conditions to check inside the function
//     //     console.log("please enter the username")
//     //     return 
//     // }

//     if(!undefined) {                                                   // same as the above but in simpler manner
//         console.log("please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(simple()); 


function simple(username = "may") {                                     // if we give default name condition wont execute

    // if(username==undefined){                                        // we can also put conditions to check inside the function
    //     console.log("please enter the username")
    //     return 
    // }

    if(!username) {                                                   // same as the above but in simpler manner
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(simple("mom")); 



