// for each loop

const myArray = ["kid","man","gay","uni","bis"]                                     // array

myArray.forEach( function (items) {                                                 // for each loop take an call back function 
    // console.log(items);                                                          //this is noraml function
} )


myArray.forEach( (items)=>{                                                        // this is arrow function
    // console.log(items)
})

// declare an seperate function

function printme(items) {                                           // if we declare seperate function then also we can use that in forEach loop 
    console.log(items);                                             // we can get an same output
}
myArray.forEach(printme)