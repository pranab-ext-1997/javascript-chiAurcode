// premetiveDatatype

// 7 types:String,Number,Boolean,null,undefined,Symbol,BignInt

// const score= 100
// const scoreValue= 100.3
// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);
// const bigNumber = 787878787878787878787878n
// console.log(bigNumber);



//RefrerenceType(NonPremetive)

// Array,Object,Functions

const heros= ["saktiman","naagraj","doga"];

let myObj = {
    name:"pranab",
    age:28
}

const myFunction =function (){
    console.log("Hi, Pranab");
    
}

// *******************************************
// Memory


//Stack (Premitive), Heap(means original mean shallow copy ) (Non-Premetive)



let myLaptopName = "HP Victus"

let anoTherName = myLaptopName;

anoTherName = "Pranab"
console.log(myLaptopName,anoTherName);
