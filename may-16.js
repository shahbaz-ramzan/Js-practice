// find prime number in the array

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const prime = array.filter((number) => isPrime(number));

console.log(prime);
