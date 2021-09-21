/**
 * @param {string} s
 * @return {number}
 */

const romansToNums = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};

var romanToInt = function(s) {
    let total = 0;
    let lastValue = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (romansToNums[s[i]] < lastValue) {
            total -= romansToNums[s[i]];
        } else {
            total += romansToNums[s[i]];
        }
        lastValue = romansToNums[s[i]];
    }
    return total;
};