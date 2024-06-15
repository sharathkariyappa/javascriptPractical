// there are two types in declaring the objects
// 1. by literals
// 2. by constructors                               // objects made by constructors is always a singleton objects

//by literals

// we can use symbol in object also

// create  variable to store the Symbol

const mySym = Symbol("key1");

const myUser = {
    name: "shaddy",
    fullName: "shaddy meow",
    age: 100,
    // mySym: "mykey1",                              // this will automatically thinks it is string
    [mySym]: "mykey1",                              // this thinks it is symbol
    email: "shadyy@ggogle.com",
    isLoggedIn: false,
    workingDays: ["monday","tuesday","friday"]
}

// to access the values we have 2 methods
// 1. by dot method
// 2. by square bracket

// by dot method

// console.log(myUser.name);
// console.log(myUser.fullName);
// console.log(myUser.email);               // here string type automatically find bt dot method

// by square bracket method

// console.log(myUser[email]);               // here we get an error of email is undefined because it unable to find it is a string 
                                            //so we can use double quotes to make string
// console.log(myUser["email"]);            // here we get correct output

// console.log(myUser[mySym]);               // get the symbol type from the object


//properties
// chnage the values
myUser.name = "shanuuuu";                      // simply by using = cn change the values in the object 
// console.log(myUser.name);

// create function in the objject

myUser.greeting = function(){
    console.log("hello JS user");
}
// console.log(myUser.greeting);                            // this shows function unanymous
// console.log(myUser.greeting());                          // this executes the console inside the function

// we can target values in objects using function

myUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);              //we use backtick and this property to target objectvalues 
}
console.log(myUser.greetingTwo());