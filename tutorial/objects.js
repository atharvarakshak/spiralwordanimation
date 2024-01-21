// const tinderUser = new Object();  //singleton obj
const tinderUser =[] //non singleton object

tinderUser.id="1"
tinderUser.name="ath"
tinderUser.isLoggedin=false


console.log(tinderUser);

const o1 ={1:"a",2:"b"}
const o2 ={3:"c",4:"d"}
const o3 ={5:"e",6:"f"}

const obj4 = {...o1,...o2,...o3}   //...spread operator
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); //to check whether the property exists