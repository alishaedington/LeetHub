/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let newString = '';
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        if (newString.indexOf(s[i]) === -1) {
            newString += s[i];
            if (newString.length > longest) {
                longest = newString.length
            }
        } else {
            if (newString.length > longest) {
                longest = newString.length
            }
            newString += s[i]
            newString = newString.slice(newString.indexOf(s[i]) + 1);
        }
    }
    return longest;
};