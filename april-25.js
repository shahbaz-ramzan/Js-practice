// Write a function that takes an array of numbers and returns a new array with the numbers in reverse order.
// Input: [1, 2, 3, 4, 5]

// let array = [1,2,3,4,5]

// function reverseArray(array){
//     return array.reverse()

// }
// console.log(reverseArray(array))

// Write a function that takes an array of numbers and returns a new array with the numbers that are divisible by 3.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: [3, 6, 9]

// let array=[1,2,3,4,5,6,7,8,9]

// function divisible(array){

//     return array.filter((el)=>el%3===0)
// }
// console.log(divisible(array))

// Write a function that takes an array of strings and returns a new array with the strings in reverse order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['you', 'meet', 'to', 'nice', 'world', 'hello']

// let array= ['hello', 'world', 'nice', 'to', 'meet', 'you']

// function reverseOrder(array){
//     return array.reverse()
// }
// console.log(reverseOrder(array))

// Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// let array=[1,2,3,4,5,6]

// function findEven(array){
//   return    array.filter((el)=>el%2===0)
// }

// console.log(findEven(array))

// Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['hello', 'meet', 'nice', 'to', 'world', 'you']

// let array=['hello', 'world', 'nice', 'to', 'meet', 'you']

// function sortedArray(array){
//     return array.sort()
// }

// console.log(sortedArray(array))

// Write a function that takes an array of numbers and returns the median of the numbers.
// Input: [1, 2, 3, 4, 5]
// Output: 3


// Write a function that takes an array of numbers and returns the highest and lowest numbers in the array as an array.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 1]

// let array=[1,2,3,4,5]

// function findinArray(array){
    
//     let min=array[0]
//     let max=array[0]
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i]
//         }
//         else if(array[i]<min){
//             min=array[i]
//         }
//     }
//     return [max,min]
// }

// console.log(findinArray(array))


// Write a function that takes an array of strings and returns a new array with the first letter of each string capitalized.
// Input: ['hello', 'world', 'nice', 'to', 'meet', 'you']
// Output: ['Hello', 'World', 'Nice', 'To', 'Meet', 'You']

// let array = ['hello', 'world', 'nice', 'to', 'meet', 'you']

// function capitalized(array){
    
// }

// Write a function that takes an array of numbers and returns the second highest number in the array.
// Input: [1, 2, 3, 4, 5]
// Output: 4

// let array= [1,5,4,3,2,7,5,4,8,9]

// function highest(array){
//     let newArray=array.sort((a,b)=>a-b)
//     console.log(newArray)
//     return newArray.at(array.length-2)
// }
// console.log(highest(array))

// Write a function that takes two arrays of numbers and returns a new array with the elements in both arrays, but with duplicates removed.
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

let array=[1,2,3,4]
let array2=[3,4,5,6]

