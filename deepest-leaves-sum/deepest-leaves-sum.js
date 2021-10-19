/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    
    // if the root has no children, return sum += root.val -- add this in at the end if it is necessary. 
     
    // create a variable to hold the current depth. -- potentially this will be in the recursive loop
    
    // traverse through the tree to find the greatest depth
    
    // once we know the greatest depth of the tree, 
    // traverse again, and sum nodes only at that depth. 
    let greatestDepth = 1;
    let sum = 0;
    
    function findGreatestDepth(currentNode, currentDepth) {
        currentDepth++;
        if (greatestDepth < currentDepth) { 
            greatestDepth = currentDepth;
            sum = 0;
        } 
        
        if (!currentNode.right && !currentNode.left && (currentDepth === greatestDepth)) {
            sum += currentNode.val;
        }
            
        if (currentNode.left) {
            findGreatestDepth(currentNode.left, currentDepth);
        }
        if (currentNode.right) {
            findGreatestDepth(currentNode.right, currentDepth);
        }
    }
    findGreatestDepth(root, 0);
    
    return sum;
};