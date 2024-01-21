const nums=[1,2,3,4,5]

// spread opeartor

const large =[...nums,7,8,9,0]

console.log(large);

function add(n1,n2,n3,n4,n5){
    return n1+n2+n3+n4+n5;
}

console.log(add(...nums));

const city=['nag','klyn']
const village=['ramt','katol']
console.log([...city,...village]);

//rest ope
function sum(...nums){
    let sum=0;
    nums.forEach(nums=>{
        sum = sum+ nums;

    } );
    return sum;
}
console.log(sum([1,2,3,4,5]));