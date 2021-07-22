// Leetcode
// 915. Partition Array into Disjoint Intervals, medium

/**
 * @param {number[]} nums
 * @return {number}
 */
 const Heap = function() {}


 var partitionDisjoint = function(nums) {
     let idx = 0, maxNum = nums[0], leftMax = nums[0];
     
     for (let i = 1; i < nums.length; i++) {
         if (nums[i] < leftMax) {
             leftMax = maxNum
             idx = i;
         }
         
         if (nums[i] > maxNum) {
             maxNum = nums[i];
         }
     }
     
     return idx + 1;
 };