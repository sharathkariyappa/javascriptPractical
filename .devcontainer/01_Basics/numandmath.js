//***********************************NUMBER************************************** */

const score = 400;
console.log(score);

console.log(typeof score);

console.log(score.toFixed(2));  //fixed number ex. 400.00

console.log(score.toPrecision(2));


const balance = new Number(100);
console.log(balance.toString().length);  // convert number to string
// console.log(balance.length);

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))  // to convert readable format

//*************************************MATHS***************************************** */

console.log(Math);
console.log(Math.abs(-8));   // to get absolute value(only +ve)
console.log(Math.ceil(2.3));  // to get higher the value 
console.log(Math.floor(3.9));  // to get lower the value

console.log(Math.max(2,10,8,0));  // to get the maximum number
console.log(Math.min(-2,-10,9,12));  // to get the min value
console.log(Math.random()+1);    // to get randomnumber b/w 0 to 1
