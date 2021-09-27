/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length === 1) { return false; };
    const openBracketStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            openBracketStack.push(s[i]);
            continue;
        }
        const openBracketPair = openBracketStack.pop();
        if (s[i] === ']' && openBracketPair === '[') {
            continue;
        }
        if (s[i] === '}' && openBracketPair === '{') {
            continue;
        }
        if (s[i] === ')' && openBracketPair === '(') {
            continue;
        }
        return false;
    }
    if (openBracketStack.length > 0) { return false; }
    return true;
};