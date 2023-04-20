// (1) Map: Write a function that takes an array of strings and returns a new array that contains the lengths of the strings.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: [5, 6, 6]

// let array=["apple","banana","cherry"]

// function findLength(array){
//      let newarray=array.map((el)=>el.length)
//      return newarray
// }

// console.log(findLength(array))

// (2) Filter: Write a function that takes an array of objects and returns a new array that contains only the objects with a 'price' property less than 10.
// Example Input: [{name: 'apple', price: 5}, {name: 'banana', price: 8}, {name: 'orange', price: 12}]
// Expected Output: [{name: 'apple', price: 5}, {name: 'banana', price: 8}]

// let array=[
//     {
//         name:"apple",
//         price:5
//     },
//     {
//         name:"banana",
//         price:8
//     },
//     {
//        name:"orange",
//        price:12, 
//     }
// ]

// function comparePrice(array){
//     let newArray=array.filter((el)=>el.price<10)
//     return newArray
// }
// console.log(comparePrice(array))


//(3) Push: Write a function that takes an array of numbers and adds the number 5 to the end of the array.
// Example Input: [1, 2, 3]

// let array=[1,2,3]

// function adds(array){
//   array.push(5)
// return array
   
// }
// console.log(adds(array))

// (4) Pop: Write a function that takes an array of numbers and removes the last element from the array.
// Example Input: [1, 2, 3]
// Expected Output: [1, 2]

// let array=[1,2,3]

// function removes(array){
//      array.pop()
//      return array
// }
// console.log(removes(array))

// (5) Shift: Write a function that takes an array of strings and removes the first element from the array.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['banana', 'cherry']

// let array = ["apple","banana","cherry"]

// function removesFirst(array){
//     array.shift()
//     return array
// }

// console.log(removesFirst(array))


// (6) Unshift: Write a function that takes an array of strings and adds the string 'orange' to the beginning of the array.
// Example Input: ['apple', 'banana', 'cherry']
// Expected Output: ['orange', 'apple', 'banana', 'cherry']

// let array=["apple","banana","chery"]

// function addsFirst(array){
//     array.unshift("shahbaz")
//     return array
// }
// console.log(addsFirst(array))


// (70) FindIndex: Write a function that takes an array of objects and returns the index of the first object that has a 'name' property equal to 'Bob'.
// Example Input: [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}]
// Expected Output: 1

let array=[
    {
        name:"Alice"
    },
    {
        name:"Bob"
    },
    {
        name:"charlie"
    }
]

function findIndex(array){
    array.indexOf(array.name.Bob)
}
console.log(findIndex(array))