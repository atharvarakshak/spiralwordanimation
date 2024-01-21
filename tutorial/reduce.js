const nums=[1,2,3]

// const myNum = nums.reduce(function (acc,curval) {
//     return acc+curval;
// },0)
// const myNum = nums.reduce((acc,curval)=> {
//     return acc+curval;
// },0)
const myNum = nums.reduce((acc,curval)=> { return acc+curval},0)
console.log(myNum);