// Leetcode
// 3Sum Closest, two pointers

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let ret = Infinity;
    let minDiff = Infinity;
    
    nums.sort(compare);
    console.log(nums);
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            let diff = threeSum - target;
            console.log(`${i} ${left} ${right}`);
            if (diff == 0) {
                ret = threeSum;
                return ret;
            }
            else if (diff < 0) {
                left++;
            }
            else {
                right--;
            }

            if (Math.abs(minDiff) > Math.abs(diff)) {
                ret = threeSum;
                minDiff = diff;
            }
        }
    }
    
    return ret;
};


const compare = function(a, b) {
    return a - b;
}