// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/

class Solution {
private:
    int findMaxNum(vector<int>& nums, int s, int e) {
        if (s >= e) return s;
        
        int m, left, right;
        
        m = (s + e) / 2;
        left = findMaxNum(nums, s, m), right = findMaxNum(nums, m + 1, e);
        
        if (nums[left] > nums[right]) return left;
        else return right;
    }
    
public:
    int findPeakElement(vector<int>& nums) {
        int ret;
        
        ret = findMaxNum(nums, 0, nums.size() - 1);
            
        return ret;
    }
};