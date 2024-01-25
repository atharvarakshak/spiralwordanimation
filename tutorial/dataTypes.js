//types -> 1. primitive  2.non primitive

//primitive => stack
let name = 'Atharva'
let myname = name
myname = 'Kabir'
console.log(name);
console.log(myname);


//non primitive -> heap

let obj ={
    email:'abc@gmail.com',
    id:'1'
}

let obj2 = obj;
obj2.email = 'ath@gmail.com'
console.log(obj);
console.log(obj2);