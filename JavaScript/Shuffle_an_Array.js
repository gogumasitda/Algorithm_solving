// Leetcode
// 384. Shuffle an Array

/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffled = this.origin.slice();
    
    for (let i = 0; i < shuffled.length; i++) {
        let j = Math.floor(Math.random() * 1000) % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    
    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */