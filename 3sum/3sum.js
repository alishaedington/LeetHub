/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    nums = nums.sort((a, b) => a - b);
    const triplets = [];
    if (nums.length < 3) { return []; }
    let end = false;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) { continue; }
        if (nums[i] > 0) { break; }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
           
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            }
            if (sum < 0) {
                j++;
            }
            if (sum === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
            }
        }
    }
    const setArray = new Set(triplets.map(x => JSON.stringify(x)))
    const uniqArray = [...setArray].map(x => JSON.parse(x))
    return uniqArray;
};