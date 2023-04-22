// Join: Write a function that takes an array of strings and joins them together with a hyphen between each string.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: 'apple-banana-cherry'

// let array=["apple","banana","cherry"]

// function tryJoin(array){
//   newArray=  array.join( "-" )
//   return newArray
    
// }
// console.log(tryJoin(array))

// Keys: Write a function that takes an object and returns an array of its values.
// Example Input: { name: 'John', age: 30 }
// Expected Output: ['John', 30]

// let obj={
//     name:"John",
//     age:"30"
// }

// function returnValues(obj){
//     return Object.values(obj)
// }

// console.log(returnValues(obj))

// Every: Write a function that takes an array of strings and returns true if all the strings are at least 5 characters long.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: false

// let array =["apple","banana","cherry"]

// function findConditional(array){
//    return array.every((el)=>el.length>5)
// }
// console.log(findConditional(array))


// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['hello', 'world']


// let array=["hello","world","nice","to","meet","you"]

// function checkLength(array){
//     let newArray=array.filter((el)=>el.length>4)
//     return newArray
// }
// console.log(checkLength(array))

// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: 30

// let array=[1,2,3,4,5,6,7,8,9,10]

// function findEven(array){
//     let even=array.filter((item)=>item%2===0)
//     return even.reduce((a,b)=>a+b)

// }
// console.log(findEven(array))