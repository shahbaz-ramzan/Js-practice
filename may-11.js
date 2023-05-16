// Write a function that takes an array of numbers and returns a new array with only the numbers that are prime.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]


let array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function findPrime(array){
  let newArr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]<=0){
            console.log(`${i} is not a prime number`)
        }
        else {
            
            for(let k=2;k<array[i];k++){
                if(array[1] % k== 0){
                    console.log(`${i} is not a prime number`)  
                }
                else {
                     newArr.push(array[i])
                }
            }

        }
    }
    return newArr
    

}

console.log(findPrime(array))