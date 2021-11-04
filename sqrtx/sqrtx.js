/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(num) {
    // we need to find the square root of the given number x. 
    // since the returned value is truncated, we can find the two numbers that are on either side of the given number, and return the smaller of the two. 
    
    //since we can easily eliminate some numbers basedon the given num, lets try to figure that out. 
    //if the given number is 4000000
    //obviously we know that the sqrt of that number is gonna be fairly large. 
    // we can go through and checkif it is between factors of ten. 
    // once we find two factors of ten that that number lands between. 
        // we can thenstart looking at individual numbers.
    if (num === 0) { return 0; }
    let lower = 1
    let higher = 10
    while (num >= (higher * higher) && num > (lower * lower)) {
        lower = higher;
        higher = higher * 10;
    }
    
    for (let i = lower; i < higher; i++) {
        let next = i + 1;
        if (num >= (i * i) && num <= (next * next)) {
            if (num === (next * next)) { return next; }
            return i;
        }
    }
};