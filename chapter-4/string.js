// String: Get Digits Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given “0s1a3y5w7h9a2t4?6!8?0”, the function should return the number 1357924680.
// unfinished needs 0 as well but Number(char) is excludes 0 because it is a falsy value.
const getDigits1 = (string) => {
    const strToArr = string.split("");
    const result = strToArr.filter((char) => {
        return Number(char);
    });
    return result.join("");
};
console.log(getDigits1("0s1a3y5w7h9a2t4?6!8?0"));

//Input: Array of HTML tags. Identify if it has a valid structure
//['<header>',</header>,<div,</div>]
//[<header>,<div>,</headrer>,</div>]

const isOpeningTag = (tag) => {
    return tag[1] !== "/";
};

const convertToOpeningTag = (closingTag) => {
    return closingTag[0] + closingTag.slice(2);
};
const isHtmlValid = (tags) => {
    const holder = [];

    for (const tag of tags) {
        if (isOpeningTag(tag)) {
            holder.push(tag);
        } else {
            const lastTag = holder.pop();
            const openingTag = convertToOpeningTag(tag);

            if (lastTag !== openingTag) {
                return false;
            }
        }
    }
    return holder.length === 0;
};

// console.log(isHtmlValid(["<div>"]));
// console.log(isHtmlValid(["<div>", "</div>"]));
// console.log(isHtmlValid(["</div>", "<div1>"]));

//// Create a function, that takes a string, each char of string is brace, <(){}[]>. You have to return true if Braces are valid, otherwise false.
// "{}[()]" => Valid
// "[}" => Not Valid
// "[{]}" => No Valid
// "{{}}[()](" => Not Valid

const openingVersionOfClosing = (brace) => {
    if (brace === "]") {
        return "[";
    }
    if (brace === "}") {
        return "{";
    }
    if (brace === ")") {
        return "(";
    }
};
console.log(openingVersionOfClosing("]"));
const isValidBraces = (braces) => {
    const holder = [];
    const openingBraces = ["[", "{", "("];
    const closingBraces = ["]", "}", ")"];
    for (const brace of braces) {
        if (openingBraces.includes(brace)) {
            holder.push(brace);
        } else if (closingBraces.includes(brace)) {
            const lastOpeningBrace = holder.pop();
            if (lastOpeningBrace !== openingVersionOfClosing(brace)) {
                return false;
            }
        }
    }
    return holder.length === 0;
};
console.log(isValidBraces("{{}}[()]("));
console.log(isValidBraces("{}[()]"));
console.log(isValidBraces("){}[()]("));

//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const createFunc = (str) => {
    let acronym = str.split(" ");
    let result = "";
    for (let i = 0; i < acronym.length; i++) {
        if (acronym.length > 0) {
            result += acronym[0].toUpperCase();
        }
    }
    return result;
};

console.log(createFunc("there's no free lunch - gotta pay yer way")); // Output: "TNFL-GPYW

//Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

const countNonSpaceCharacters = (str) => {
    const text = str.split(" ");
    return text.join("").length;
};
console.log(convertToOpeningTag("Honey pie, you are driving me crazy"));

// ["abc", "defg", "a", "xy"], 3; => ["abc", "defg"];

// Given anarray of string, and length(number). Return a new array, remove all strings that have less chars than
const arrOfStr = (arr, num) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < num) {
            newArr.push(arr[i]);
        } else {
            return arr[i];
        }
    }
    return newArr;
};
console.log(arrOfStr(["abc", "defg", "a", "xy"], 4));

// Integer to Roman Numerals Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

const dictionary = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    19: "XIX",
    40: "XL",
    49: "XLIX",
    100: "C",
    500: "D",
    1000: "M"
};

const romanNum = (nums) => {
    let positiveInt = "";
    for (const key in dictionary) {
        while (nums >= key) {
            positiveInt += dictionary[key];
            nums -= key;
        }
    }
    return positiveInt;
};

// Example usage:
console.log(romanNum(349)); // Outputs "CCCIL"
console.log(romanNum(444)); // Outputs "CDXLIV"/not yet resulted

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("rotetor"));
console.log(isPalindrome("hello"));

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("rotetor"));
console.log(isPalindrome("hello"));

const fizzBuzz = (numbers) => {
    for (let i = 0; i < numbers; i++) {
        if (i % 15 === 0) {
            console.log("FizzBUzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }
    }
};

//Construct a function that counts the number of vowels in a string.
const countVowels = (str) => {
    let count = 0;
    let vowels = "aeiou";
    for (const char of str) {
        if (vowels.includes(char)) count++;
    }
    return { vovels: count, consonantnts: str.length - count };
};
console.log(countVowels("apple"));

//Develop a function that determines if two strings are anagrams of each other. Return true if anagrams, else false.
// e.g ("secure", "rescue")
// secure   =>  rescue
//HELLO, ELLOH\
// APPLE, LEAPP
// PULLS, PULLR
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    str1Count = {};
    str2Count = {};
    for (const char of str1) {
        if (str1Count[char]) {
            str1Count[char]++;
        } else {
            str1Count[char] = 1;
        }
    }
    for (const char of str2) {
        if (str2Count[char]) {
            str2Count[char]++;
        } else {
            str2Count[char] = 1;
        }
    }
    for (const char in str1Count) {
        if (str1Count[char] !== str2Count[char]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("secure", "rescue"));
