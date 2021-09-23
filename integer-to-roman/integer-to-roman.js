/**
 * @param {number} num
 * @return {string}
 */

//create a int to roman object. 
const intInRoman = [
    { val:1000, rom:'M' },
    { val:900, rom:'CM' }, 
    { val:500, rom:'D' },
    { val:400, rom:'CD' }, 
    { val:100, rom:'C' }, 
    { val:90, rom:'XC' }, 
    { val:50, rom:'L' }, 
    { val:40, rom:'XL' }, 
    { val:10, rom:'X' }, 
    { val:9, rom:'IX' }, 
    { val:5, rom:'V' }, 
    { val:4, rom:'IV' }, 
    { val:1, rom:'I' },
]
var intToRoman = function(num) {
    if (num < 1 || num > 3999) {throw 'num must be in range 1 < num < 3999'}
    if (typeof num !== 'number') {throw 'please provide a number'}
    
    let currentNum = num;
    let romanString = '';
    let index = 0;
    while (currentNum > 0) {
        const { rom, val } = intInRoman[index];
        while (currentNum >= val) {
            romanString += rom;
            currentNum -= val;
        }
        index++
    }
    return romanString;
};