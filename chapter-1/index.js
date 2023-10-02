//Bigger size
const biggieSize = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(biggieSize([-1, 3, 5, -5]));

//
const printLowReturnHigh = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // You need to use arr.length instead of just 'arr'
        if (arr[i] > max) {
            max = arr[i]; // Update max if arr[i] is greater
        }
        if (arr[i] < min) {
            min = arr[i]; // Update min if arr[i] is smaller
        }
    }
    // console.log("Minimum:", min);
    return { min, max };
};

console.log("Maximum:", printLowReturnHigh([15, 10, 8, 5, 23])); // Pass an array as an argument and print the result

// first odd number

const firstOdd = (nums) => {
    for (let amount of nums) {
        if (amount % 2 !== 0) {
            return amount;
        }
    }
    return "No odd found";
};

console.log(firstOdd([9]));
console.log(firstOdd([8]));
//DoubleVision

const doubleVision = (numbers) => {
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            newArr.push(numbers[i] * 2); // Double the value and push it to newArr
        }
    }
    return newArr;
};
console.log(doubleVision([1, 2, 3]));
//Other version
const doubleArr = (numbers) => {
    return numbers.map((num) => num * 2);
};

//countpositives
//other way
const countPositives1 = (nums) => {
    return nums.reduce((acc, num) => {
        return num > 0 ? acc + 1 : acc;
    }, 0);
};
//
const countPositives = (arr1) => {
    count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            count++;
        }
    }
    return count;
};
console.log(countPositives([-1, 1, 1, 1]));

//Even and Odds

const evenAndOdds = (nums) => {
    for (let i = 0; i < nums.length - 2; i++) {
        let first = nums[i],
            second = nums[i + 1],
            third = nums[i + 2];
        if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0) {
            console.log([first, second, third], "Odds");
            i += 2;
        } else if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
            console.log([first, second, third], "Evens");
            i += 2;
        }
    }
};
evenAndOdds([1, 3, 5, 2, 4, 6]);

//increment the seconds

const incrementSecunds = (array) => {
    for (let i = 1; i < array.length; i += 2) {
        array[i] += 1;
    }
    return array;
};
console.log(incrementSecunds([1, 3]));

//previous lenght
const previousLength = (words) => {
    let prev = words[0];
    for (let i = 1; i < words.length; i++) {
        let temp = words[i];
        words[i] = prev.length;
        prev = temp;
    }
    return words;
};
console.log(previousLength(["apple", "banana", "peach"]));

// Add seven to Most

const addSeventoMost = (arr) => {
    let seven = [];
    for (let i = 0; i < arr.length; i++) {
        seven.push(arr[i] + 7);
    }
    return seven;
};
console.log(addSeventoMost([20, 30, 40]));

//reverseArray
const reverseArrInPlace = (arr) => {
    return arr.reverse();
};
console.log(reverseArrInPlace([1, 3, 4, 5, 6]));
// //option2
// const reverseArrInPlace = (arr) => {
//     let mid = arr.length / 2;

//     for (let i = 0; i < mid; i++) {
//         [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
//     }
//     return arr;
// };

// Negativate array

const negativate = (numbers) => {
    let allNegatives = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            let negative = i - 1 * numbers[i];
            allNegatives.push(negative);
        } else {
            allNegatives.push(numbers[i]);
        }
    }
    return allNegatives;
};
console.log(negativate([1, -3, 5]));

//HungryArray

const hungryArray = (food) => {
    let found = false;
    for (let eat of food) {
        if (eat === "food") {
            found = true;
            console.log("Yummy");
        }
    }
    if (!found) {
        return "I am HUngry";
    }
};

console.log(hungryArray(["apple", "banana", "food"]));

// Swap towards

const swapTowards = (arr) => {
    let temp1 = arr[0];
    let temp2 = arr[2];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp1;

    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;

    return arr;
};

console.log(swapTowards([2, 4, 6, 1, 3]));

//Scale the array

const scaleArray = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += arr[i] * num;
    }
    return arr;
};
console.log(scaleArray([6], 3));

// keep the last n

const keepTheLastN = (arr, n) => {
    let sliceIdx = arr.length - n;
    return arr.slice(sliceIdx);
};

console.log(keepTheLastN([2, 4, 6, 8, 10], 3));

// Math Help

const findX = (M, B) => {
    // Y = MX + B; Y = 0. Given M and B, find X.
    let X = -B / M;
    return X;
};
console.log(findX(2, 6));

// Soaring IQ

function soaringIQ(startIQ) {
    var sumIq = 0;
    for (let i = 0.01; i <= 0.98; i += 0.01) {
        sumIq += i;
    }
    return sumIq + startIQ;
}
console.log(soaringIQ(100));

// Letter Grade

const letterGrade = (num) => {
    let grade = "";

    if (num >= 90) {
        grade = "A";
    } else if (num >= 80) {
        grade = "B";
    } else if (num >= 70) {
        grade = "C";
    } else if (num >= 60) {
        grade = "D";
    } else {
        return "Retake your exam";
    }
    console.log(`Score: ${num}. Grade: ${grade}`);
};

letterGrade(100);
