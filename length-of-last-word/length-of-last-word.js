/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // we want to return the length of the last work in the given string s. 
    // iterating from the back of the string, find the first non space letter and count each consecutive letter until the next space is observed. 
    
    // create a count variable
    // iterate through the string backwards
        //if the current element is a space and the count is greater than 0, 
            //break
        //if the current letter is not a space
            //increase the count 
    //return the count
    
    let count = 0;
    for (let i = s.length - 1; i > -1; i--) {
        if (s[i] === ' ' && count > 0) {
            break;
        } 
        if (s[i] !== ' ') {
            count++;
        }
    }
    return count;
};