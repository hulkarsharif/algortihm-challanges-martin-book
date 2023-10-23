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
