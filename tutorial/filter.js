const arr=[1,2,3,4,5,6,7,8,9,10]

// const newArr = arr.forEach((item)=>{
//     console.log(item);
//     // return item;
// });



const newArr = arr.filter((num)=>{
    return  num>4
})
console.log(newArr);