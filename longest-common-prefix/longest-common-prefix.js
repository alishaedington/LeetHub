/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //create a new string variable
    // iterate through first string in the strs array. 
        // if each of the strings in the strs array have the same letter at the given index, 
            //add that letter to the new string
        // otherwise 
            //return the new string
    // return the new string
    let commonPrefix = '';
    if (strs.length === 1) {
        return strs[0];
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return commonPrefix;
            } else if (j === strs.length - 1) {
                commonPrefix += strs[0][i]
            }
        }
    }
    return commonPrefix;
};