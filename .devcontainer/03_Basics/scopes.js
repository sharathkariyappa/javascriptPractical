// scopes
// 1. global scope(access items everywhere)
// 2. block scope(access items within the block(brackets))


// if(true) {
//     let Name = "mann";
//     if(Name === "mann")
//         {
//             const email ="welcome.mail";
//             console.log("welcome ",  Name);
//         }
//     console.log(Name);                                              // child block(loop) can  borrow info from the parent block executes well.

//     console.log(email);                                             // parent block can not borrow the info from the child block results error.
// }


// function addone(num) {
//     let res = num + 1;

//     function addtwo(num) {
//         let sum = num + res;                                           // block scope can get values from the global scope 
//         console.log(sum);                                              // it execute the code line by line
//     }
//     addtwo(5)
// }
// addone(10)

//***************************************************** part-2********************************************** */

// function sum(num) {
//     console.log(num + 1);
// }
// sum(4);                                                             // argument is passed after the function it will work well

// const sub = function (num) {
//     console.log(num + 4)
// }
// sub(5);                                                            // argument is passed after the function it will work well



// sum(4);                                                             // if we declare arguement before thr function it also work well  
function sum(num) {
    console.log(num + 1);                                           // beacsue it is simple function without the variable to hold
}


sub(5);                                                             // if we declare argumet before function in variable holding function it 
const sub = function (num) {
    console.log(num + 4)                                            // gives an error  due to hoisting(can not access before initialization)
}
sub(5);  