
//closure something which relates to environment

// const num1 = 10;
const show =function(num1){
    console.log(`number is ${num1}`);
    return num1+10
}
show();

//closure
const addMe=function(num1){
    return function(num2){
        
        return num1+num2;
    }
}

const addOne=addMe(5)
// const addtwo=addMe(8)

const num = addOne(10)
console.log(num);

const num1 =addOne(9)
console.log(num1);

// curring
console.log(addMe(1)(5));