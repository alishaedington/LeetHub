/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //we need to find each distict way up the given staircase n 
    
    //we can have a count variable and an inner function
    
    //inner function takes in the amount of stairs left to climb. 
    // when amount of stairs left to climb is zero
        //increment counter.
    //otherwise
        //loop through the options(1, 2) and 
        //subtract the current selection number from stairs left to climb
            //(if possible without going negative)
            //call inner function with new stairs left to climb amount. 
    
    // call the inner function
    //return the count
    
//     let count = 0;
    
//     function findWaysUp(stairsLeft) {
//         if (stairsLeft === 0) { 
//             count++; 
//         } else {
//             for (let i = 1; i <= 2; i++) {
//                 if (stairsLeft - i >= 0) {
//                     findWaysUp(stairsLeft - i)
//                 }
//             }
//         }
//     }
    
//     findWaysUp(n);
//     return count;
    
    let first = 1;
    let second = 2;
    while (--n) {
        second = second + first;
        first = second - first;
    }
    return first;
};