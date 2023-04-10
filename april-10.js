// Create a function that takes an array of numbers and returns the sum of all the numbers.


// let number =[2,4,6,8,4,3,2,1,2]

// function findSum(number){
//     let sum =0;
//     for(let i=0;i<number.length;i++){
//         sum=sum+number[i];
//     }return sum;

// }
// let sums=findSum(number);
// console.log(sums);


// Create a function that takes an array of strings and returns a new array that contains only the strings that have more than 5 characters

// const stringArray=["shahbaz","ali","aban","shahbaz","wahab","shahab"];

// function findString(stringArray){
//     let requiredString=[];

//     for(let i=0;i<stringArray.length;i++){
//         length=stringArray[i].length;

//         if(length>5){
//             requiredString.push(stringArray[i]);
//         }
//         else{
//             console.log(length)
//         } 
//     } return requiredString
// }

// let stringGreaterby5=findString(stringArray)
// console.log(stringGreaterby5)



// Create a function that takes an array of numbers and returns a new array that contains only the even numbers.

let number =[2,4,6,8,4,3,2,1,2];

function findEven(number){
    let evenNumber=[];
    for(let i=0;i<number.length;i++){
        if(number[i]%2===0){
            evenNumber.push(number[i])
        }
    } return evenNumber;
}

let even=findEven(number)
console.log(even);