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
// console.log(simple("mom")); 

// some more types of passing arguments 

// function calculatePrice(num1) {
//     return num1
// }
// console.log(calculatePrice(4,100,4000));                            //suppose we have passed 4 or more arguemnts it returns only 1 

// function calculatePrice(...num1) {                                      // here we used rest operator to manage arguments
//     return num1
// }
// console.log(calculatePrice(4,100,4000,200,900))                                    //converts to an array

// function calculatePrice(value1, value2, ...num1) {                         // here we used rest operator to manage arguments  value 1 and 2 
//     return num1                                                            // stores 1st and 2nd times
// }
// console.log(calculatePrice(4,100,4000,200,900)) 


// objects in function

// const user = {
//     id: 123,
//     email: "shaddy@google.com"
// }

function userDetails(anyobject) {
    return `the id is ${anyobject.id} and email is ${anyobject.email}`
}
// console.log(userDetails(user));                                  // simple type to passing argument 
console.log(userDetails({                                           // without the creating an object we cn pass directly an an argument
    id: 3,
    email: "shanua@gmail"
}))


// array as function

// const array = [100,400,500,800];                                   //creating an arrrya

function getArray(getnum){
    return getnum[2]
}
// console.log(getArray(array));                                       //passing an array

console.log(getArray([200,300,500,1000]));                         // directly passs=ing an array as an argument