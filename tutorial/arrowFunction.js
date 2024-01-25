// const user={
//     username:"rakshak",
//     price:1000,
//     message:function(){
//         console.log(`${this.username} welcome to channel`);
//         console.log(this);
//     }


// }

// //  this-> refers to the currnt context
// this keyword works under object only not a function
// user.message();
// user.username = "singh";
// user.message();

// console.log(this); //no refrence to any object as not defined in any object

// // browser has global object name -> window

// function chai(){
//     let user="ATh";
//     console.log(this.username);  
// }
// chai();


// arrow function  ()=>{}
const chai = ()=>{
    let user="ATh";
    console.log(user);  
}
chai();


const sub = (n1,n2)=>  {
    return n1-n2
};
console.log(sub(5,4));
// implicit returm=n
// in {} you need to return value
// else no need to return


const add = (n1,n2)=>  n1+n2;

console.log(add(1,2))