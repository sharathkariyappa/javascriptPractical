// 2nd part of array

const marvel_hero = ["thor","hulk","ironman","loki"];
const dc_hero = ["flash","superman","batman","wondwewoman"];


// to combine 2 arrays we use diif methods

// push()
// marvel_hero.push(dc_hero); // this will push whole array in to last index(difficult to access the elements)
// console.log(marvel_hero[4][2]);  //gets batman 

//concat()
// const all_hero = marvel_hero.concat(dc_hero);  //returns array with all elements(easy to access the elements)
// console.log(all_hero.length);

//spread-out
// const all_hero = [...marvel_hero,...dc_hero]; //easy to write and handle many arrays
// console.log(all_hero);

//flat()
// const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_Array = another_Array.flat(Infinity);  //distribute all array elements easy to use
// console.log(real_another_Array);

// console.log(Array.isArray("krupa")); // returns false 
// console.log(Array.from("krupa"));
// console.log(Array.from({name: "krupa"})); // if key & element not present returns empty array


let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
