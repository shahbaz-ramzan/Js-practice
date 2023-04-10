// Create a function that takes an array of numbers and returns the sum of all the numbers.


let number =[2,4,6,8,4,3,2,1,2]

function findSum(number){
    let sum =0;
    for(let i=0;i<number.length;i++){
        sum=sum+number[i];
    }return sum;

}
let sums=findSum(number);
console.log(sums)