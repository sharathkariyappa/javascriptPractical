//all primitive data types store in stack whicch can not be changes original values,, it can copy the original value 

let oldName = "shana";
let newName = oldName;

newName = "mana";
console.log(oldName); //here it does not changed the old name
console.log(newName); // it copied old name and changed the new name


let value1 = {
    email : "nanu@gmail.com",
    age : 20,
}
let value2 = value1;

value2.email = "baa@gmail.com";

console.log(value1.email);
console.log(value2.email);  //it changes original value