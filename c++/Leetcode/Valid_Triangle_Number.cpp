// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/

class Solution {
private:
    int lower_bound(int s, int e, int target, vector<int>& nums) {
        int ret = s - 1;
        
        int m;
        while (s <= e) {
            m = (s + e) / 2;
            
            if (nums[m] < target) {
                ret = m;
                s = m + 1;
            }
            else e = m - 1;
        }
        
        return ret;
    }
    
public:
    int triangleNumber(vector<int>& nums) {
        int ans = 0;
        sort(nums.begin(), nums.end());
        
        for (int i = 0; i < (nums.size() - 2); i++) {
            for (int j = i + 1; nums[i], j < (nums.size() - 1); j++) {
                ans += lower_bound(j + 1, nums.size() - 1, nums[i] + nums[j], nums) - j;
            }
        }
        
        return ans;
    }
};