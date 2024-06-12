const arr = ["hello",1,3,5,10];
// console.log(arr[2]);

const newArr = new Array(1,3,4,5,77,10);
// console.log(typeof newArr);

// console.log(newArr[0]);

// console.log(newArr.push(19)); //push adds value @ last
// console.log(newArr);

// console.log(newArr.pop());  //pops out last value
// console.log(newArr);

// console.log(newArr.unshift(100));  // adds value @ 1st place
// console.log(newArr);

// console.log(newArr.shift());   // removes the value @ 1st place
// console.log(newArr);

// console.log(newArr.includes(10));  //returns true or false
// console.log(newArr.indexOf(10));  // returns value of index

const myArr =  newArr.join();  // this creates a new array i.e converts to string
console.log(typeof myArr);
console.log(myArr.length); //we can apply properties of string to get answers

console.log(newArr.slice(1,4)); // retturn section of array starting fromindex 1 & ends with index 3
console.log(newArr);

console.log(newArr.splice(1,4));
console.log(newArr);