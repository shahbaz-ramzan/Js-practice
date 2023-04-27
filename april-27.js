// Write a function that takes two strings as input and concatenates them.
// Sample input: "hello", "world"
// Expected output: "hello world"

let string1="hello";
let string2="world";

function concatenates(string1,string2){
    const concatenated= string1.concat(" ",string2)
    
    return concatenated
}

console.log(concatenates(string1,string2))
