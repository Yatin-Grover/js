// let n=5;
//  let string = "";

//  for(i=0;i<n;i++){
//     for(j=0;j<n;j++){
//         string +="*";
//     }
//     string += "\n";
//  }
//  console.log(string);

// let n=5;
// let string="";

// for(i=0;i<n;i++){
//     for(j=0;j<n;j++){
//         if(i===0 ||i===n-1){
//             string +="*";
//         }else{
//             if(j===0 || j===n-1){
//                 string += "*";
//             }else{
//                 string += " ";
//             }
//         }
//     }
//     string +="\n";
// }
// console.log(string);

// let object={
//     firstname:"yatin",
//     lastname:"grover",
//     age:"22",
//   qualifications : ["B.tech(c.s.e)", "Training(mern-stack)", "Trainig(Graphic-designer)"],

// }
// console.log(object.qualifications[1]);

// let arr=[
//     {
//         firstname:"yatin",
//         lastname:"grover",
//         age:"24",
//         distt:"jalandhar",
//     },
//     {
//         firstname:"rohan",
//         lastname:"Kumar",
//         age:"26",
//         distt:"Kapurthala",
//     },
//     {
//         firstname:"Neelam",
//         lastname:"Kaur",
//         age:"34",
//         distt:"Amristsar",
//     },
//     {
//         firstname:"Neetu",
//         lastname:"Shtra vala",
//         age:"44",
//         distt:"Kartarpur",
//     },
// ]
// for(i=0;i<=0;i++){
//     // for(j=0;j<3;j++){
// console.log(arr[1].firstname);
//     // }
//     // console.log("\n");
// }

// let n=5;
// let string="";

// for(i=1;i<=n;i++){
//     for(j=0;j<i;j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// let n=5;
// let string="";

// for(let i=1;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         string += " ";
//     }
//     for(let k=0;k<i;k++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// let n=5;
// let string="";

// for(i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
// string +="*";
//     }
//     string +="\n";
// }
// console.log(string);


// let n=5;
// let string="";

// for(i=1;i<=n;i++){
//     for(j=0;j<i;j++){
//        if(i===n){
//         string +="*";
//        }else{
//         if(j===0 || j===i-1){
//             string +="*";
//         }else{
//             string += " ";
//         }
//        }
//     }
//     string +="\n";
// }
// console.log(string);

let n=5;
let string="";

for(i=1;i<=n;i++){
    for(j=1;j<n-i;j++){
string +=" ";
    }
    for(k=0;k<2*i-1;k++){
        string +="*";
}
string +="\n";
}
console.log(string);
