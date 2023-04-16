// 1. Reverse: Write a function that takes an array and returns a new array with the elements reversed.
// Example Input: [1, 2, 3]
// Expected Output: [3, 2, 1]

// let array= [1,2,3]

// function findReverse(array){

//     return array.reverse()

// }

// console.log(findReverse(array))

// (2) Map: Write a function that takes an array of numbers and returns a new array with the numbers squared.
// Example Input: [1, 2, 3]
// Expected Output: [1, 4, 9]

// let input=[1,2,3,4]

// function findSquare(input){
//     return input.map((el)=>el*2)
// }

// const newInput=findSquare(input)
// console.log(newInput)


// (3)Filter: Write a function that takes an array of numbers and returns a new array with only the numbers greater than 0.
// Example Input: [1, 2, 3, -1, -2, -3]
// Expected Output: [1, 2, 3]


// let array=[1,2,3,-1,-2,-3]

// function findGreater(array){
//     return array.filter((el)=>el>0)
// }
// let newArray=findGreater(array);
// console.log(newArray);


// (4) Map and Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers squared.
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [4, 16, 36]


// let input=[1,2,3,4,5,6]


// function findSquare(){

//     let newInput=input.filter((el)=>el%2==0)
//     return( evenSquare=newInput.map((el)=>el*el))
// }
// console.log(findSquare(input))

// (5)Reduce: Write a function that takes an array of numbers and returns the sum of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6

// let input=[1,2,3]

// function finSum(input){
//     return input.reduce((a,b)=>a+b)

// }

// console.log(finSum(input))

//(6) Find: Write a function that takes an array of numbers and returns the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 2


// let input=[1,2,3,4]

// function findGreater(input){

//    return input.find((el)=>el>1)
// }
// console.log(findGreater(input))

// (7)Reduce: Write a function that takes an array of numbers and returns the product of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6


// let input=[1,2,3,4]

// function findProduct(input){
//     return input.reduce((a,b)=>a*b)
// }

// console.log(findProduct(input))

//(8) FindIndex: Write a function that takes an array of numbers and returns the index of the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 1

// let input=[1,2,3,4,5]

// function findIndex(input){
//     return input.indexOf(findGreater())
//     function findGreater(){
//         return input.find((el)=>el>1)
//     }
// }

// let index=findIndex(input)
// console.log(index)

// (9)Reduce: Write a function that takes an array of numbers and returns the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 3

// let input=[1,2,3]

// function findMaximum(input){
//     let max=[0]
//     for (let index = 0; index < input.length; index++) {
//         if(input[index]>max){
//             max=input[index]
//         }
        
//     }
//     return max
// }

// console.log(findMaximum(input))

//(10) FindIndex: Write a function that takes an array of numbers and returns the index of the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 2


let array=[1,2,3,4,5]

function findMaximum(array){
    let max =[0]
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }return max 
}


let newArray=array.indexOf(findMaximum(array))

console.log("index of the maximum value is",newArray)