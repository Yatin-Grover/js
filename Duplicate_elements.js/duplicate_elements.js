// filter method-------
// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     return arr.filter((item, index) => arr.indexOf (item) === index);

// }
// console.log(removeDuplicate(arr));


// set method-------
// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     return[...new Set(arr)];
// }
// console.log(removeDuplicate(arr));

// foreach method-----
// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     let unique=[];
//     arr.forEach(element => {
//         if(!unique.includes(element)){
//             unique.push(element);
//         }
//     });
//     return unique;
// }
// console.log(removeDuplicate(arr));

// reduce method-----
// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     let unique=arr.reduce(function(acc, curr){
//         if(!acc.includes(curr))
//         acc.push(curr);
//         return acc;
//     },[]);
//     return unique;
// }
// console.log(removeDuplicate(arr));

// indexOf method
// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     let unique = [];
//     for(i=0; i<arr.length; i++){
//         if(unique.indexOf(arr[i]) === -1){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicate(arr));

// let arr=['apple','mango','apple'];
// function removeDuplicate(arr){
//     let unique=[];
//     for(i=0;i<arr.lenght;i++){
//         if(unique.indexOf(arr[i]) === -1){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicate(arr));

let arr=['mango', 'apple', 'grapes', 'mango']
function removeDuplicate(arr){
    return arr.filter((index, items) => arr.indexOf(index) === items)
}
console.log(removeDuplicate(arr));