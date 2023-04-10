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

// let number =[2,4,6,8,4,3,2,1,2];

// function findEven(number){
//     let evenNumber=[];
//     for(let i=0;i<number.length;i++){
//         if(number[i]%2===0){
//             evenNumber.push(number[i])
//         }
//     } return evenNumber;
// }

// let even=findEven(number)
// console.log(even);


// Create a function that takes an array of numbers and returns the largest number in the array.

// let number  =[2,4,6,8,4,3,2,1,2];

// function findMaximum(number){
//     let max=number[0];
//     for(let i=0;i<number.length;i++){
//         if(number[i]>max){
//             max=number[i]

//         }
//     } return max
// }

// const maximum=findMaximum(number);
// console.log(maximum)


// Create a function that takes an array of numbers and returns the smallest number in the array.


// let number =[2,4,6,8,4,3,2,1,2];

// function findMinimum(number){
//   let    min=number[0];

//     for(let x =0;x<number.length;x++){
//         if(number[x]<min){
//             min=number[x];
//         }
//     }return min;
// }

// let minimum=findMinimum(number);
// console.log(minimum)

// Create a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.




// let number=[5,4,3,5,3,2,7,9,6,5,4,7,4,8,9,6,4,3,2,1,8];

// function sortdNumber(number){
//   let ascending=number.sort(function(a,b){
//     return a-b;
//   })
//   return ascending;
// }

// let sorted=sortdNumber(number);
// console.log(sorted)



// Create a function that takes an array of strings and returns a new array with the first letter of each string capitalized.


// let stringArray=["shahbaz","ali","awais","shahab","sajjid"];

    
//        function  pascalCase(){

//     for(let i=0;i<stringArray.length;i++){
//         stringArray[i]=stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1) 
//         // console.log("test",stringArray[i].charAt(0).toUpperCase())
   
//     }
//             return stringArray

//        }

// console.log(pascalCase(stringArray));


// Create a function that takes an array of numbers and returns the sum of all the numbers squared.

// let array= [2,4,2,8];

// function findSquareroot(array){
//     let sum=0;
//     for(let i=0;i<array.length;i++){
//         sum+=array[i]
//     }
//     return Math.sqrt(sum)
// }
// console.log(findSquareroot(array))

// create a function that takes an array of numbers and returns a new array with only the unique values (i.e., no duplicates).
