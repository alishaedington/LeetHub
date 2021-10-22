/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   
    let maxWater = 0;
    
    let i = 0;
    let j = height.length - 1;
    while (j > i) {
        const area = (j - i) * Math.min(height[i], height[j]);
        if (area > maxWater) {
            maxWater = area;
        }
        if (height[j] > height[i]) {
            i++;
        } else {
            j--;
        }
    }
    
    return maxWater;
};