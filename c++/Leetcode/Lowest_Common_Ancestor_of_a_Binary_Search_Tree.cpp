/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == 0 || p == root || q == root) return root;
        
        TreeNode* left = lowestCommonAncestor(root->right, p, q);
        TreeNode* right = lowestCommonAncestor(root->left, p, q);
        
        if (left && right) return root;
        
        if (left == 0) return right;
        else return left;
    }
};