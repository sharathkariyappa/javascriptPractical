// other type of declaring the function 
// understanding of this keyword


const user = {
    Name: "shan",
    email: "shan@google.com",
    price: 999,

    loginMessage: function () {
        console.log(`${this.Name}, our company welcomes you`);                // this keyword is access the whole context
    }

}
// user.loginMessage();
// user.Name = "mann"
// user.loginMessage();

// console.log(this)                                                   // in node this will return the empty string and in console.log of website 
                                                                    // it will return window 

// const chai = function () {
//     const username = "map"
//     console.log(this.username);                                     // this is ormal typeof declaring the function
// }
// chai()

// const chai =  () => {                                                  // this is the  arrow function declaration
//     const username = "map"
//     console.log(this.username);
// }
// chai()


// const addsum =(num1,num2) =>{                                               //ttpe of declaring arrow function
//     return num1 + num2
// }
// console.log(addsum(4,7));

const addsum =(num1,num2)=>  num1 + num2                                       //simplest form of declaring the arraow functon
console.log(addsum(4,7));