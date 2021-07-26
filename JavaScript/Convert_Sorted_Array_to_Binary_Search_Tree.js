// Leetcode
// 108. Convert Sorted Array to Binary Search Tree, easy

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    return makeTree(0, nums.length - 1, nums);
};

let makeTree = function(s, e, nums) {
    if (s > e) return;
    
    let m = Math.floor((s + e) / 2);
    
    let left = makeTree(s, m - 1, nums);
    let right = makeTree(m + 1, e, nums);
    
    let root = new TreeNode(nums[m], left, right);
    
    return root;
}