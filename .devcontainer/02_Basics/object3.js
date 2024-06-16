// De- structuring of objects

const tution = {
    studentName: "shaddyy",
    studentId: 3,
    email: "shaddy10@gmail.com",
    feePayed: 2000
}

// in order to fetch the values from the object no need to write the consolelog for each of the attribute
// we use de-structure methods

const {studentName:Name} = tution;              // we can de-structure like this using curley bracesss it help in reacts
console.log(Name);