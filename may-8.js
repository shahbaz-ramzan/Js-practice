


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

// let str="hello world"

// function removeVowels(str){

//     let vowels=["a","e","i","o","u","A","E","I","O","u"]
//     newString=""

//     for(let i=0;i<str.length;i++){

//         if(!vowels.includes(str[i])){
//             newString += str[i];
//         }

//     }
//     return newString
// }

// console.log(removeVowels(str))


// (3) Write a function that takes a string as input and returns a new string with all consonants removed.
// Sample input: "hello world"
// Expected output: "eo o"

// let str = "hello world"

// function removeConsnt(str){
//     let vowels=["a","e","i","o","u","A","E","I","O","u"];
//     let newString="";

//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             newString += str[i]

//         }
//     }return newString
// }
// console.log(removeConsnt(str))


// (4) Write a function that takes a string as input and returns a new string with the characters in reverse order.
// Sample input: "hello world"
// Expected output: "dlrow olleh"

// let str="hello world"

// function reverse(str){
//     let arr=str.split("")
//     // console.log(arr)
//     let newArr=arr.reverse()
//     // console.log(newArr)
//     let newStr=newArr.join("")
//     // console.log(newStr)
//     return newStr
// }

// console.log(reverse(str))

// Write a function that takes a string as input and returns true if the string contains only alphabetic characters, false otherwise.
// Sample input: "hello world"
// Expected output: true


// (5) Write a function that takes a string as input and returns the number of occurrences of a specified character in the string.
// Sample input: "hello world", "l"
// Expected output: 3

// let str="hello world"
// let char="l"

// function findOccurence(str,char){
//     let count=0
//     for(i=0;i<str.length;i++){

//         if(str[i]===char){

//             count ++;


//         }

//     }return count
// }

// console.log(findOccurence(str,char))





// (6) Write a function that takes a string as input and returns the index of the first occurrence of a specified character in the string, or -1 if the character is not found.
// Sample input: "hello world", "l"
// Expected output: 2

// let str = "hello world"

// function findIndex(str){
//     let newStr=str.indexOf("l")
    
//     return newStr

// }
// console.log(findIndex(str))

// (7) Write a function that takes a string as input and returns a new string with all occurrences of a specified character removed.
// Sample input: "hello world", "l"
// Expected output: "heo word"

// let str="hello world"
// let char="l"

// function allOccurenceRemoved(str,char){
//     newStr="";

//     for(let i=0;i<str.length;i++){
//         if(str[i]!=char){

//             newStr += str[i]
            

//         }
//     }
//     // console.log(newStr)
//     return newStr
// }

// console.log(allOccurenceRemoved(str,char))

// (8) Write a function that takes a string as input and returns a new string with all occurrences of a specified substring removed.
// Sample input: "hello world", "l"
// Expected output: "heo word"



// let str="hello world"
// let char="l"

// function allOccurenceRemoved(str,char){
//     subString="";

//     for(let i=0;i<str.length;i++){
//         if(str[i]!=char){

//             subString += str[i]
            

//         }
//     }
//     // console.log(subString)
//     return subString
// }

// console.log(allOccurenceRemoved(str,char))

// (9) Write a function that takes in a string and returns the number of vowels in the string.
// Example input: "hello world"
// Expected output: 3

// let str="hello world"

// function countVowels(str){
//     let vowels=["a","e","i","o","u","A","E","I","O","U"]

//     let count=0;
   
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count ++;
//         }
//     }
//     return count
// }

// console.log(countVowels(str))

// (10) Write a function that takes in a string and returns the number of words in the string.
// Example input: "hello world"
// Expected output: 2

let str ="hello world"

function countWorlds(str){
    let count=str.split(" ")
    return count.length
}

console.log(countWorlds(str))

