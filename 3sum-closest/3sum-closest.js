/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    //naive solution first, 
    // create a variable for closest so far to target, initialize it to 0
    // create a variable to hold the difference (absolute value) of closest and target. 
    //loop for first int
        // loop for second int
            //loop for third int
                //add the three integers together
                // compare to target, (find the difference? )
                // if the difference we calc here is less than the stored difference, 
                    //set the difference to the difference we just calculated, 
                    //set the closest so far to the total calculated here. 
    //return the closest to target variable
    
    let closestToTarget;
    let diffFromClosestToTarget;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let diff = Math.abs(target - sum);
                if (diff < diffFromClosestToTarget || diffFromClosestToTarget === undefined) {
                    closestToTarget = sum;
                    diffFromClosestToTarget = diff;
                }
            }
        }
    }
    return closestToTarget;
};