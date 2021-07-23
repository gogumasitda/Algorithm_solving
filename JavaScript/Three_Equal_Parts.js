// Leetcode
// 927. Three Equal Parts, Hard

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var threeEqualParts = function(arr) {
    let totalOne = arr.reduce((sum, cur) => sum + cur);
    
    if (totalOne % 3) return [-1, -1];
    else if (totalOne == 0) return [0, 2];
    
    let eachOne = totalOne / 3;
    let count = 0;
    let length = 0;
    let firstPartStart, secondPartStart, thirdPartStart;
    for (let i = arr.length - 1; i >= 0; --i) {
        if (arr[i]) {
            count++;
            
            if (count == eachOne) {
                length = arr.length - i;
                thirdPartStart = i;
                break;
            }
        }
    }
    
    firstPartStart = arr.indexOf(1);
    secondPartStart = arr.indexOf(1, firstPartStart + length);

    for (let i = 0; i < length; i++) {
        if (arr[firstPartStart + i] != arr[secondPartStart + i] || arr[secondPartStart + i] != arr[thirdPartStart + i]) return [-1, -1];
    }
    return [firstPartStart + length - 1, secondPartStart + length];
};