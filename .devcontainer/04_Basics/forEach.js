// for each loop

const myArray = ["kid","man","gay","uni","bis"]                                     // array

// myArray.forEach( function (items) {                                                 // for each loop take an call back function 
//     // console.log(items);                                                          //this is noraml function
// } )


// myArray.forEach( (items)=>{                                                        // this is arrow function
//     // console.log(items)
// })

// declare an seperate function

// function printme(items) {                                           // if we declare seperate function then also we can use that in forEach loop 
//     // console.log(items);                                             // we can get an same output
// }
// myArray.forEach(printme)

// myArray.forEach( (items,arr,index)=>{                                  // we can get an items,index and whole array in foreach loop
//     // console.log(items,arr,index);
// })


// array of objects 
//[{},{},{}]

const array = [                                         //in array of objects
    {
        movie: "thor",
        hero: "chris"
    },
    {
        movie: "ironman",
        hero: "RDJ"
    },
    {
        movie: "kgf",
        hero: "yash"
    }
]

array.forEach( (items)=>{                               // we can get an object's values fro each  object in the array
    console.log(items.hero);
})
