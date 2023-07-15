// map methods                                 1. get
const numb=new Map([
    ["apples",300],
    ["Banana",400],
    ["Papaya",800]
]);

                                            // 2. set

// numb.set("apples", 200);
// console.log(numb.get("apples"));
// console.log(numb.size);                      3. size      

                                                // 4. delete
                                                // 5. has
// numb.delete("apples");
// console.log(numb.has("apples"));
                                            // 6. foreach

// let text="";
// numb.forEach(function(value, key){
//     text += key +' = '+ value + "\n"
// })
// console.log(text);
                                            // 7. entries

let text="";
for(const x of numb.entries()){
    text += x +"\n"
}
console.log(text);