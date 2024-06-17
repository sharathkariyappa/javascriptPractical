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


function addone(num) {
    let res = num + 1;

    function addtwo(num) {
        let sum = num + res;                                           // block scope can get values from the global scope 
        console.log(sum);                                              // it execute the code line by line
    }
    addtwo(5)
}
addone(10)
