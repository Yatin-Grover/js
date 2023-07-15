const arr = [9, 44, 9, 2, 5];

const a = arr.map((value, index) => {
  return value + index;
});

arr[0] = 5;

console.log(a); // Output: [5, 45, 11, 5, 9]

const arr1=[47,2,4,1,4]
const b=arr1.filter((a)=>{
   return a<10 
});
console.log(b);

// [ 2, 4, 1, 4 ] output
const arr2=[48,2,98,55]
const c=arr2.reduce((d,e)=>{
    return d*e
});
console.log(c);