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

console.log("----------------------");

//Fibonacci
const fibonacci = (size) => {
    let sum = [0, 1];
    for (let i = 2; i <= size; i++) {
        sum[i] = sum[i - 1] + sum[i - 2];
    }
    return sum;
};
console.log(fibonacci(10));

//isPrime

const isPrime = (num) => {
    if (num < 1) {
        return false;
    }
    for (i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(7));
console.log("-------------------");

// Sweat Shirt Pricing
const sweatShirtPricing = (num) => {
    let discount = 0;
    if (num === 2) {
        discount = 0.09;
    } else if (num === 3) {
        discount = 0.19;
    } else if (num >= 4) {
        discount = 0.35;
    }
    return Math.ceil(num * 20 - num * 20 * discount);
};
console.log(sweatShirtPricing(10));

// Extract-o-matic

const extractDigit = (num, digitNum) => {
    num = Math.abs(num);
    let nthDigit = digitNum >= 0 ? 10 ** digitNum : 10 ** Math.abs(digitNum);

    if (digitNum >= 0) {
        return Math.floor(num / nthDigit) % 10;
    }

    return Math.floor(num * nthDigit) % 10;
};
console.log(extractDigit(34567, 1));

// Most significant digit. Leftmost non-zero digit

const mostSignificantDigit = (number) => {
    number = Math.abs(number);
    if (number > 1) {
        while (number >= 10) {
            number = number / 10;
        }
    } else {
        while (number < 1) {
            number * 10;
        }
    }
    return Math.floor(number);
};
console.log(mostSignificantDigit(12345));

// Gaming Fundamentals
const rollOne = () => {
    return Math.ceil(Math.random() * 6);
};

const playFives = (num) => {
    for (let i = 0; i < num; i++) {
        let result = rollOne();
        console.log(result);
        if (result === 5) {
            console.log("Thats good luck");
        }
    }
};
const playStatistics = (num) => {
    let min = null;
    let max = null;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        let result = rollOne();
        sum += result;
        if (min === null) {
            min = result;
        }
        if (max === null) {
            max = result;
        }

        if (min > result) min = result;
        if (max < result) max = result;
    }

    return {
        min,
        max,
        sum,
        average: sum / num
    };
};

// Statistics Untill Doubles

const rollOne20 = () => {
    return Math.ceil(Math.random() * 20);
};

const statisticsUntilDoubles = () => {
    let current = rollOne20();
    let next = rollOne20();
    let rolls = 2;
    let sum = current + next;
    let min = current;
    let max = next;

    while (current !== next) {
        let result = rollOne20();
        rolls++;
        sum += result;
        if (min > result) min = result;
        if (max < result) max = result;
        current = next;
        next = result;
    }

    return {
        min,
        max,
        rolls,
        sum,
        average: sum / rolls,
        current,
        next
    };
};

console.log(statisticsUntilDoubles());
