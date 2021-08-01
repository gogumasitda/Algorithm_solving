// Leetcode
// 35. Search Insert Position, Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return binarySearch(0, nums.length - 1, target, nums);
};

const binarySearch = function(s, e, target, nums) {
    let ans = e + 1;
    
    while (s <= e) {
        let m = parseInt((s + e) / 2);
        
        if (nums[m] >= target) {
            ans = m;
            e = m - 1;
        }
        else {
            s = m + 1;
        }
    }
    
    return ans;
}