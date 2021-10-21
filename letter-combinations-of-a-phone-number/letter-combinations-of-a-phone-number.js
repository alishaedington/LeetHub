/**
 * @param {string} digits
 * @return {string[]}
 */

const digitLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
}

var letterCombinations = function(digits) {
    
    const result = [];
    if (!digits.length) { return result; }
    
    const findCombos = (currentString) => {
        if (currentString.length === digits.length) {
            result.push(currentString)
            return;
        }
        const currentDigit = digits[currentString.length]
        for (let i = 0; i < digitLetters[currentDigit].length; i++) {
            let addition = currentString + digitLetters[currentDigit][i]
            findCombos(addition);
        }
    }
    findCombos('');
    return result;
};