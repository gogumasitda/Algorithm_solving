// Leetcode

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
    cutEmptyNode(root);
    return root;
};

let cutEmptyNode = function(node) {
    if (node === null) return null;
    

    let left = cutEmptyNode(node.left);
    let right = cutEmptyNode(node.right);
    
    if (left === null && right === null && node.val == 0) {
        console.log(`${node.val}`)
    }
    
    return node;
}