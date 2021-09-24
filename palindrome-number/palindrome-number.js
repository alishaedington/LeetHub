/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = x.toString();
    const splitString = string.split('').reverse().join('');
    if (splitString !== string) {
        return false;
    }
    return true;
};