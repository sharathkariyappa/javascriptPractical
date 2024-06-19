// controlflow / logic flow
// way of stopping the code 

// 1 if/else loops

// const score = 100;
// if(score >10) {
//     console.log("score is grater than 10")
// }
// if(score>=100) {
//     console.log("score is less than 100 and equal to 100")
// }

// const username = "hello"
// if(username =="hello") {
//     console.log(`this is, ${username}`)
// }

// 2 switch loop

// const score = 100;
// switch (score) {
//     case 1:
//         console.log("score is not one")
//         break;
//     case 100:
//         console.log("score is 100")
//     default:
//         break;
// }

// 3 truthy and falsy values

//falsy values 
// Nan , undefined, null, 0, false, -0, bigint 0n

// truthy values
// all values except falsy values are truthy


const val1 = null ?? 10
const val2 = 10 ?? 20
console.log(val2)