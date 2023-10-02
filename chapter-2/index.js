//Three and Five , FizzBuzz
const threeAndFive = () => {
    let sum = 0;
    for (i = 100; i <= 400000; i++) {
        if (((i % 5 === 0 || i % 3 === 0) && i % 5 !== 0) || i % 3 !== 0) {
            sum = +i;
        }
    }
    return sum;
};
console.log(threeAndFive());

//Coinchange
const generateChange = (cents) => {
    let counter = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
    while (cents >= 25) {
        cents -= 25;
        counter["quarters"] += 1;
    }
    while (cents >= 10) {
        cents -= 10;
        counter["dimes"] += 1;
    }
    while (cents >= 5) {
        cents -= 5;
        counter["nickels"] += 1;
    }
    while (cents >= 1) {
        cents -= 1;
        counter["pennies"] += 1;
    }
    return counter;
};
console.log(generateChange(85));

// Messy Math Mashup
const messyMath = (num) => {
    let nums = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % 3 === 0) {
            continue;
        } else if (num % 7 === 0) {
            nums.push(2 * i);
            sum += 2 * i;
        } else {
            sum += i;
            nums.push(i);
        }
    }
    return [nums, sum];
};
console.log(messyMath([4], 6));

//Fibonacci
const fibonacci = (size) => {};
