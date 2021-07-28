// Leetcode
// 600. Non-negative Integers without Consecutive Ones, Hard

/**
 * @param {number} n
 * @return {number}
 */
 var findIntegers = function(n) {
    let ret = 0;
    let isNoConsecutiveOnes = 1;
    
    const dp = [1, 2];
    
    const binaryN = n.toString(2);
    let = binaryLength = binaryN.length;
    
    fillTable(binaryLength, dp);
    
    for (let i = 0; i < binaryLength; i++) {
        if (binaryN[i] === '0') continue;
        if (i > 0 && binaryN[i - 1] === '1') {
            isNoConsecutiveOnes = 0;
        }
        
        let dpIdx = binaryLength - i - 1;
        
        ret += dp[dpIdx];
        console.log(ret);
        
        if (isNoConsecutiveOnes === 0) break;
    }
    
    ret += isNoConsecutiveOnes;
    
    
    return ret;
};

const fillTable = function(binaryLength, dp) {
    for (let i = 1; i < binaryLength; i++) {
        dp.push(dp[i] + dp[i - 1]);
    }
}