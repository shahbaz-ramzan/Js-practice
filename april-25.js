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

let array=[1,2,3,4,5,6,7,8,9]

function divisible(array){

    return array.filter((el)=>el%3===0)
}
console.log(divisible(array))