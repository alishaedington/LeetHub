/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) { return 0; }
    if (target > nums[nums.length - 1]) { return nums.length; }
    
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((end + start) / 2)
    while (end !== start) {
        if (end - start === 1) {
            break;
        }
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] > target) {
            end = middle;
            middle = Math.floor((end + start) / 2);
        } else {
            start = middle;
            middle = Math.floor((end + start) / 2);
        }
    }
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    if (target > nums[end]) { 
        return end + 1; 
    } else if (target < nums[end]) {
        return start + 1;
    }
};