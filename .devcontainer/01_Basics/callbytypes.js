//primitive(call by value)
// string, number, symbol, bigint, bool, null, undefined

let value = 33;
let name = "hello badboy";
let samn = Symbol("123");
let issigned = true;
console.log(typeof samn);

//non-primitive  (call by reference)
//array, function, object

let buddy = [12,34,13,31];
console.log(buddy);
console.log(typeof buddy);

let vanda = function (){
    console.log(123);
}
console.log(vanda);