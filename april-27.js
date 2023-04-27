// (1) Write a function that takes two strings as input and concatenates them.
// Sample input: "hello", "world"
// Expected output: "hello world"

// let string1="hello";
// let string2="world";

// function concatenates(string1,string2){
//     const concatenated= string1.concat(" ",string2)
    
//     return concatenated
// }

// console.log(concatenates(string1,string2))

// (2) Write a function that takes a string as input and returns a new string with all vowels removed.
// Sample input: "hello world"
// Expected output: "hll wrld"

let str="hello world"

function removeVowels(str){

    let vowels=["a","e","i","o","u","A","E","I","O","u"]
    newString=""

    for(let i=0;i<str.length;i++){

        if(!vowels.includes(str[i])){
            newString += str[i];
        }

    }
    return newString
}

console.log(removeVowels(str))
