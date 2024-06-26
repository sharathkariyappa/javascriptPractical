// high level iterations 
// for of loop
// for in loop
// for each loop

// 1 for of loop //

// const myArray = ["ram","sham","bhim"]
// for (const items of myArray) {                                       // there is no declaration of starting values
//     // console.log(items);                                            // this will automatically detect all 
// }



// const greetings = "hello president madam"
// for (const greet of greetings) {                                        // for of loop applicable for strings and array
//     console.log(`welcome ${greet}`);
// }


// const myObject = {
//     name: "sharu",
//     age: 60,
//     role: "human"
// }

// for (const items of myObject) {                                         // for of loop is notapplicable for the object      
//     console.log(items);
// }

// for in loop//

// const myObject = {
//     name: "sharu",
//     age: 60,
//     role: "human"
// }
// for (const key in myObject) {                                           // for object we can use forin loop which is made for object
//    console.log(myObject[key]);                                          // this will gives values of object
//    console.log(key);                                                    // this will gives keys of object
// }


// const myArray = ["ram","sham","bhim"];
// for (const items in myArray) {                                              // for in loop is also applicable for array
//     console.log(items);                                                     // gives the index of the array      
//     console.log(myArray[items]);                                             // gives the index and values of the array      
// }

// const greetings = "hello president madam";                                    // for in loop is applicable for all array, string, object
// for (const words in greetings) {
//    console.log(greetings[words]);                                             // gives the output
// }

// maps

const map = new Map()                                                          //map is an object like object it store only uniques values & keys
map.set("In","india")
map.set("usa","america")
map.set("rs","russia")
map.set("jap","japan")
// console.log(map);

for (const key of map) {                                                //for of loop used in map and it gets values
    // console.log(key);
}

for (const key in map) {                                                  // for in loop dont respond on for in loop 
    // console.log(key);
}