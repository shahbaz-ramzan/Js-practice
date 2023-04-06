const array = [1, 9, 8, 4, 3, 1, 2, 2, 3, 15];
const array1 = [3, 4, 2, 1, 567, 32, 15];

// concat()

// const result = array.concat(array1);
// console.log(result);

// filter()

// const result = array.filter((el) => {
//   return el % 2 === 0;
// });
// console.log(result);

// const result1 = array1.filter((ele) => {
//   return ele % 2 === 0;
// });
// console.log(result1);

// map()

// const result = array.map((el) => {
//   return el + 2;
// });
// console.log(result);

// const result1 = array.map((item) => {
//   return item * 2;
// });
// console.log(result1);

// slice()

// const result = array.slice(0, 7);
// console.log(result);
// const result1 = array1.slice(0, 4);
// console.log(result1);

// splice()

// const result = array.splice(1, 4, 20, 50);
// console.log(result);
// console.log(array);

// const result1 = array1.splice(0, 5, 725896);
// console.log(result1);
// console.log(array1);

//flat()

// const array3 = [1, 3, 5, [11, 12]];
// const result3 = array3.flat(1);
// console.log(result3);

// flatMap()

// const result3 = array3.flatMap(() => {
//   return [el, el * 2];
// });
// console.log(result3);

//reverse()

// let array3 = [
//   "z",
//   "y",
//   "x",
//   "w",
//   "v",
//   "u",
//   "t",
//   "s",
//   "r",
//   "q",
//   "p",
//   "o",
//   "n",
//   "m",
//   "l",
// ];
// const result3 = array3.reverse();
// console.log(result3);

// sort()

// const result3 = array3.sort();
// console.log(result3);
// const result1 = array1.sort((a, b) => a - b);
// console.log(result1);
// const result = array.sort((a, b) => b - a);
// console.log(result);

let array3 = [
  "l",
  "m",
  "n",
  "o",
  "p",

  "u",
  "v",
  "w",
  "x",
  "y",
  "q",
  "r",
  "s",
  "t",
  "z",
];
// const result3 = array3.sort().reverse();
// console.log(result3);

// //join()
// const result = array.join("+");
// console.log(result);

// const result3 = array3.join(",");
// console.log(result3);

// function grandSum(ac, el) {
//   return ac + el;
// }

// const result = array.reduce(grandSum);
// console.log(result);

// every()

// function iseven(el) {
//   return el % 2 == 0;
// }
// const result1 = array1.every(iseven);
// console.log(result1);

// some()

// function iseven(el) {
//   return el % 2 == 0;
// }
// const result1 = array1.some(iseven);
// console.log(result1);

//find()

// function iseven(el) {
//   return el == 15;
// }
// const result1 = array1.findIndex(iseven);
// console.log(result1);

const names = ["ali", "aban", "ameen", "taskin"];

// const result = names.pop();
// console.log(result);
// console.log(names);

//push()

// names.push("shahbaz");
// console.log(names);
// names.pop();
// console.log(names);

// shift()

// names.shift();
// console.log(names);

// names.unshift("shahbaz");
// console.log(names);

// fill()

// names.fill("shahbaz", 2, 5);
// console.log(names);

names.copyWithin(0, 0);
console.log(names);
