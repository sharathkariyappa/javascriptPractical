const tinderuser = {}                               // empty object
// console.log(tinderuser);

const tindertwouser = new Object()                  // is also a methos to declare a empty object
// console.log(tindertwouser);

//assign value from outside the object

tindertwouser.id = "abc12"
tindertwouser.name = "shaddy"
tindertwouser.email = "baba@tinder.com"
// console.log(tindertwouser);


// combining the two objects

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {obj1,obj2}                            // this will combine object 1 with another object this will becoe messy
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);           // this is efficient way to combine objects
// console.log(obj4);

const obj5 = {...obj1,...obj2};                     // easy way to combine the objects
// console.log(obj5);

// objects in objects

const newData = {
    userData: {
        UserName: {
            firstName: "shaddy",
            lastName: "don"
        }
    }
}

// access the values from nested objects

// console.log(newData.userData.UserName.firstName);

// from the database values of objcts
// we get  array of objects

const users = [
    {
        id: 1,
        email: "shan@gmail.com"
    },
    {
        id: 2,
        email: "shn@gmail.com"
    },
    {
        id: 3,
        email: "sha@gmail.com"
    },
]

console.log(users[0].email);                            // to geth the values of  object that in the form ob the  array
console.log(Object.keys(tindertwouser));                // we can get the keys and element from  the object by Object function  converts to array
console.log(Object.values(tindertwouser));

console.log(tindertwouser.hasOwnProperty('email'));      // to get to know the values present in the object