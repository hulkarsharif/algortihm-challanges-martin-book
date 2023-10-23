// //Three and Five , FizzBuzz
// const threeAndFive = () => {
//     let sum = 0;
//     for (i = 100; i <= 400000; i++) {
//         if (((i % 5 === 0 || i % 3 === 0) && i % 5 !== 0) || i % 3 !== 0) {
//             sum = +i;
//         }
//     }
//     return sum;
// };
// console.log(threeAndFive());

// //Coinchange
// const generateChange = (cents) => {
//     let counter = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
//     while (cents >= 25) {
//         cents -= 25;
//         counter["quarters"] += 1;
//     }
//     while (cents >= 10) {
//         cents -= 10;
//         counter["dimes"] += 1;
//     }
//     while (cents >= 5) {
//         cents -= 5;
//         counter["nickels"] += 1;
//     }
//     while (cents >= 1) {
//         cents -= 1;
//         counter["pennies"] += 1;
//     }
//     return counter;
// };
// console.log(generateChange(85));

// // Messy Math Mashup
// const messyMath = (num) => {
//     let nums = [];
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         if (num % 3 === 0) {
//             continue;
//         } else if (num % 7 === 0) {
//             nums.push(2 * i);
//             sum += 2 * i;
//         } else {
//             sum += i;
//             nums.push(i);
//         }
//     }
//     return [nums, sum];
// };
// console.log(messyMath([4], 6));

// console.log("----------------------");

// //Fibonacci
// const fibonacci = (size) => {
//     let sum = [0, 1];
//     for (let i = 2; i <= size; i++) {
//         sum[i] = sum[i - 1] + sum[i - 2];
//     }
//     return sum;
// };
// console.log(fibonacci(10));

// //isPrime

// const isPrime = (num) => {
//     if (num < 1) {
//         return false;
//     }
//     for (i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPrime(7));
// console.log("-------------------");

// // Sweat Shirt Pricing
// const sweatShirtPricing = (num) => {
//     let discount = 0;
//     if (num === 2) {
//         discount = 0.09;
//     } else if (num === 3) {
//         discount = 0.19;
//     } else if (num >= 4) {
//         discount = 0.35;
//     }
//     return Math.ceil(num * 20 - num * 20 * discount);
// };
// console.log(sweatShirtPricing(10));

// // Extract-o-matic

// const extractDigit = (num, digitNum) => {
//     num = Math.abs(num);
//     let nthDigit = digitNum >= 0 ? 10 ** digitNum : 10 ** Math.abs(digitNum);

//     if (digitNum >= 0) {
//         return Math.floor(num / nthDigit) % 10;
//     }

//     return Math.floor(num * nthDigit) % 10;
// };
// console.log(extractDigit(34567, 1));

// // Most significant digit. Leftmost non-zero digit

// const mostSignificantDigit = (number) => {
//     number = Math.abs(number);
//     if (number > 1) {
//         while (number >= 10) {
//             number = number / 10;
//         }
//     } else {
//         while (number < 1) {
//             number * 10;
//         }
//     }
//     return Math.floor(number);
// };
// console.log(mostSignificantDigit(12345));

// // Gaming Fundamentals
// const rollOne = () => {
//     return Math.ceil(Math.random() * 6);
// };

// const playFives = (num) => {
//     for (let i = 0; i < num; i++) {
//         let result = rollOne();
//         console.log(result);
//         if (result === 5) {
//             console.log("Thats good luck");
//         }
//     }
// };
// const playStatistics = (num) => {
//     let min = null;
//     let max = null;
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         let result = rollOne();
//         sum += result;
//         if (min === null) {
//             min = result;
//         }
//         if (max === null) {
//             max = result;
//         }

//         if (min > result) min = result;
//         if (max < result) max = result;
//     }

//     return {
//         min,
//         max,
//         sum,
//         average: sum / num
//     };
// };

// // Statistics Untill Doubles

// const rollOne20 = () => {
//     return Math.ceil(Math.random() * 20);
// };

// const statisticsUntilDoubles = () => {
//     let current = rollOne20();
//     let next = rollOne20();
//     let rolls = 2;
//     let sum = current + next;
//     let min = current;
//     let max = next;

//     while (current !== next) {
//         let result = rollOne20();
//         rolls++;
//         sum += result;
//         if (min > result) min = result;
//         if (max < result) max = result;
//         current = next;
//         next = result;
//     }

//     return {
//         min,
//         max,
//         rolls,
//         sum,
//         average: sum / rolls,
//         current,
//         next
//     };
// };

// console.log(statisticsUntilDoubles());

// Array: Min to Front Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToPos = (arr) => {
    let lowestNumIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[lowestNumIdx] > arr[i]) {
            lowestNumIdx = i;
        }
    }
    return lowestNumIdx;
};

const minToFront = (arr) => {
    let minPos = minToPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};

console.log(minToFront([4, 2, 1, 3, 5]));

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

//Array: Min to Front Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
const minToPos1 = (arr) => {
    let lowestNumIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[lowestNumIdx] > arr[i]) {
            lowestNumIdx = i;
        }
    }
    return lowestNumIdx;
};
const minToFront1 = (arr) => {
    let minPos = minToPos(arr);
    for (let i = minPos; i > 0; i--) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
    return arr;
};
console.log(minToFront([4, 2, 1, 3, 5]));
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
// [1,2,3,4,5,6,7]   =>   [7,6,5,4,3,2,1]
const reverseArray = (array) => {
    let leftSide = 0;
    let rightSide = array.length - 1;
    let i = leftSide;
    while (i < rightSide) {
        let temp = array[i];
        array[i] = array[rightSide];
        array[rightSide] = temp;
        i++;
        rightSide--;
    }
    return array;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
const reverseArray2 = (array) => {
    let left = 0;
    let right = array.length - 1;
    for (let i = left; i < right; i++) {
        let temp = array[left]; // temp = 1
        array[left] = array[right]; // array[left] = 7
        array[right] = temp; // array[right] = 1
        left++;
        right--;
    }
    return array;
};
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 9]));
console.log(reverseArray2([1, 2, 3, 4, 5, 6, 7, 10]));


