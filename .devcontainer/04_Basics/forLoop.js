// for loop

for(let i =0; i<=10;i++) {
    if(i==5) {
        // console.log(`5 is the fav number`);
    }
    const element = i;
    // console.log(element);
}

// trying with array

const myArray = ["thor","batman","hulk","flash"];
for (let i = 0; i < myArray.length; i++) {
    if(i=="flash") {
        // console.log(`he is badass for dc heroes😍`);
    }
    const element = myArray[i];
    // console.log(element);
    
}

// nested loops

for (let i = 0; i < 10; i++) {
    console.log(`the outerloop is ${  i}`);
    for (let j = 0; j < 10; j++) {
        
        console.log(`the innerloop is ${j}`);
        
    }
    
}