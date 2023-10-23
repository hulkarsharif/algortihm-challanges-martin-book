// Array: Filter Range Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     min:3     max: 7            =>     [3, 4, 5, 6, 7]
function filterRangeInPlace(arr, min, max) {
    let currentIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[currentIndex] = arr[i]; // 5 // at index 0 [5],  at index 1 [5, 2]
            currentIndex++;
        }
    }
    console.log(currentIndex);
    // Truncate the array to the new length (currentIndex)
    arr.length = currentIndex;
    return arr;
}
// Example usage:
const arr = [1, 5, 2, 8, 3, 7, 4];
const min = 2;
const max = 6;
filterRangeInPlace(arr, min, max);
console.log(arr); // Output: [5, 2, 3, 4]
// Array: Concat Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( [‘a’,‘b’], [1,2] ) should return new array [‘a’,‘b’,1,2].
const arrConcat = (arr1, arr2) => {
    const newArr = [];
    for (const ele of arr1) {
        newArr.push(ele);
    }
    for (const ele of arr2) {
        newArr.push(ele);
    }
    return newArr;
};
const input1 = ["a", "b"];
const input2 = [1, 2];
console.log(arrConcat(input1, input2));
// Skyline Heights Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1, 10, 10, 1, 5, 12, 7, 15] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
// [-1, 1, 1, 7, 12, 3, 15]
function visibleBuildings(heights) {
    const visible = [];
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];
        if (height > max) {
            visible[visible.length] = height;
            // visible[0] = 1; // variable = [1];
            // visible[1] = 7; // variable = [1, 7];
            // visible[2] = 12; // variable = [1, 7, 12];
            // visible[3] = 15; // variable = [1, 7, 12, 15];
            max = height;
        }
    }
    return visible;
}
console.log(visibleBuildings([-1, 1, 1, 7, 8, 9, 10, 12, 7, 8, 9, 3, 15])); // Output: [1,  7,  8, 9,10, 12, 15]
console.log(visibleBuildings([0, 4])); // Output: [4]
// Array: Remove Negatives Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions. Second: don’t use nested loops.
// [2, 5, -1, 10, -3, -2, 7]
const removeNegatives = (arr) => {
    let currentIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[currentIndex] = arr[i];
            currentIndex++;
        }
    }
    arr.length = currentIndex;
    return arr;
};
console.log(removeNegatives([2, 5, -1, 10, -3, -2, 7])); // [ 2, 5, 10, 7 ]
// Array: Second-to-Last Return the second-to-last element of an array. Given [42,true,4,“Kate”,7], return “Kate”. If array is too short, return null.
const secondToLast = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
};
console.log(secondToLast([42, true, 4, " Kate", 7])); // “Kate”
console.log(secondToLast([42])); // null
// Array: Nth-to-Last Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
const nthToLast = (arr, n) => {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - n];
};
console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3)); // output: 4
// Array: Second-Largest Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
const secondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    let maxNum = 0;
    let secondLargest = 0;
    //  [42, 1, 4, Math.PI, 7]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            // 42 > 0  => secondLargest = 0; maxNum = 42;
            // 1 > 0 => secondLargest = 1;
            // 4 > 1 => secondLargest = 4;
            // 7 > 4 => secondLargest = 7;
            secondLargest = maxNum;
            maxNum = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};
console.log(secondLargest([42, 1, 4, Math.PI, 7]));

const ntnLargest = (arr, n) => {
    if (n > arr.length) {
        return null;
    }

    return arr[arr.length - n];
};

console.log(ntnLargest([10, 5, 8, 20, 15])); // not correct

const shuffleArr = (arr) => {
    let randomIndex = [];
    for (let i = 0; i < arr.length; i++) {
        randomIndex = Math.floor(Math.random() * arr.length);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
};

console.log(shuffleArr([1, 2, 3, 4, 5]));

//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {
    arr.splice(start, end - start + 1);
    return arr;
}

console.log(removeRange([20, 30, 40, 50, 60, 70], 2, 4));

// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:
// 1)      Set aside the last digit; do not include it in these calculations (until step 5);
// 2)      Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3)      If any results are larger than 9, subtract 9 from them;
// 4)      Add all numbers (not just our odds) together;
// 5)      Now add the last digit back in – the sum should be a multiple of 10. For example, when given digit array
// [5,2,2,8,2], after step 1) it becomes
// [5,2,2,8], then after step 2) it is
// [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.
// isValidCreditCardNumber;
const isValidCreditCardNumber = (nums) => {
    let sum = nums[nums.length - 1];
    let product;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i % 2 !== 0) {
            product = nums[i] * 2;
            if (product > 9) product -= 9;
            sum += product;
        } else {
            sum += nums[i];
        }
    }
    return sum % 10 === 0;
};
const isCreditCardValid = (digitArr) => {
    let lastDigit = digitArr[digitArr.length - 1];
    let sum = 0;
};
console.log(isValidCreditCardNumber([5, 2, 2, 8, 2]));
// Array: Remove Range
// Given array, and indices start and end, remove
// remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
const removeRange = (arr, start, end) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < start || i > end) {
            arr[count] = arr[i];
            count++;
        }
    }
    arr.length = count;
};
const array = [20, 30, 40, 50, 60, 70];
removeRange(array, 2, 4);
console.log(array);

//  Intermediate Sums You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2] => sum = 15    => [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15]
// [1, 2, 1, 2, 1, 2, 1, 2, 1]    9 elements => 14      => [1, 2, 1, 2, 1, 2, 1, 2, 1, 14]
// [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]      14 elements     => [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]
// [.... 20 numbers]  =>  [... 10 numbers sum of first 10 numbers, another 10 numbers, another sum of 10 numbers ]
const intermediateSums = (arr) => {
    const newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr.push(arr[i]);
        if ((i + 1) % 10 === 0 || i === arr.length - 1) {
            newArr.push(sum);
            sum = 0;
        }
    }
    return newArr;
};
console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));
console.log(
    intermediateSums([
        1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1
    ])
);
// Here’s how it works:
// The variable sum is used to keep track of the running sum for the current chunk of elements. It is initialized to 0.
// As the loop iterates through the elements of the input array, it continuously adds the current element to the sum. This is done with the line sum += arr[i];.
// When (i + 1) is a multiple of 10 (i.e., every tenth element), the code enters the conditional block. In this block, it appends the sum (which contains the sum of the last ten elements) to the result array with the line result.push(sum);.
// After appending the sum, the sum is reset to 0 to start calculating the sum for the next chunk of elements.
// The loop continues to process the elements until it reaches the end of the input array.
// Finally, after the loop completes, there might be some remaining elements that were not part of a complete chunk (i.e., not a multiple of ten). To ensure that the sum of these remaining elements is also included, the code checks if sum is not equal to 0. If sum is not 0, it means there are remaining elements, and their sum is appended to the result array.
// This ensures that even if the input array does not have a length that’s exactly a multiple of ten, the code will still add the sum of the last chunk of elements to the result array.
function addIntermediateSums(arr) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(arr[i]);
        if ((i + 1) % 10 === 0) {
            result.push(sum);
            sum = 0;
        }
    }
    if (sum !== 0) {
        result.push(sum);
    }
    return result;
}
const inputArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
const resultArray = addIntermediateSums(inputArray);
console.log(resultArray);
// Double Trouble Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,“Ulysses”, 42,false] to [4, 4, “Ulysses”, “Ulysses”, 42, 42, false, false].
const doubleTrouble = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
};
console.log(doubleTrouble([4, "Ulysses", 42, false]));
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40]. Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!
const combineTwoArray = (arr1, arr2) => {
    const combinedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combinedArray.push(arr1[i]);
        }
        if (i < arr2.length) {
            combinedArray.push(arr2[i]);
        }
    }
    return combinedArray;
};
console.log(combineTwoArray([1, 2], [10, 20, 30, 40]));
// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string ” Pl   ayTha  tF   u  nkyM  usi    c  “, return “PlayThatFunkyMusic”.
const removeBlanks = (string) => {
    // return string.trim(” “).split(” “).join(“”);
    return string.split("” “").join("");
};
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

