// Write a function that takes an array of numbers and returns a new array with the numbers sorted in descending order.
// Input: [5, 2, 8, 1, 6]
// Output: [8, 6, 5, 2, 1]

// let array=[5,2,8,1,6]

// function sortedArray(array){
//  return   array.sort((a,b)=>b-a)

// }
// console.log(sortedArray(array))
// Write a function that takes an array of strings and returns a new array with only the strings that start with the letter 's'.
// Input: ['sunny', 'cloudy', 'rainy', 'snowy']
// Output: ['sunny', 'snowy']

let array=['sunny', 'cloudy', 'rainy', 'snowy']

function findString(array){
    return array.filter((el)=>el.startsWith("s"))

}
