//define function as a clss being used as a contructor

function task(){
    console.log('dothis');
}
task();

//function call me function define kiya and usi me param pass kiya
(function(name){
    console.log(`name:${name}`);
})('sanjeev');


//using call back
((name)=>{
    console.log(`name:${name}`);
})('sanjeev');


const person= (()=>{
    let naam = 'ath'
    return {
        name:'Amit'
    };
})()

// iife immediately involked function expression
const myFunc=()=>{
    
}

console.log(person);
person.setName('Amitab');
console.log(person.getName());
