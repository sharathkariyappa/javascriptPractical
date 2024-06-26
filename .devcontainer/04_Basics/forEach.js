// for each loop

const myArray = ["kid","man","gay","uni","bis"]                                     // array

myArray.forEach( function (items) {                                                 // for each loop take an call back function 
    // console.log(items);                                                          //this is noraml function
} )


myArray.forEach( (items)=>{                                                        // this is arrow function
    console.log(items)
})