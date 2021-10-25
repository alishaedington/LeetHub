/**
 * @param {number[]} height
 * @return {number}
 */

function findMax(begI, endI, array) {
    let max = 0;
    for (let i = begI; i <= endI; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

var trap = function(height) {
    
    let totalWater = 0; 
    let lastIndex = height.length - 1;
    for (let i = 0; i < height.length; i++) {
        let leftMax = findMax(0, i - 1, height);
        let rightMax = findMax(i + 1, lastIndex, height)
        if (rightMax < height[i] || leftMax < height[i]) {
            continue;
        }
        totalWater += Math.min(leftMax, rightMax) - height[i]
    }
    return totalWater;
};