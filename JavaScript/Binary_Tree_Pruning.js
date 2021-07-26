// Leetcode
// 814. Binary Tree Pruning

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
 * @return {TreeNode}
 */
 var pruneTree = function(root) {
    root = clearTree(root);
    
    return root;
};

let clearTree = function(node) {
    if (node === null) return null;
    
    let left = clearTree(node.left);
    let right = clearTree(node.right);
    
    if (left === null && right === null && node.val === 0) return null;
    
    node.left = left, node.right = right;
    return node;
}