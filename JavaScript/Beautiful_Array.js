// Leetcode
// Beautiful Array, medium

/**
 * @param {number} n
 * @return {number[]}
 */
 let numDictionary = {};

 var beautifulArray = function(n) {
     if (n === 1) return [1];
     if (n in numDictionary) return numDictionary[n];
     
     let ret;
     
     let odd = beautifulArray(parseInt((n + 1) / 2));
     let even = beautifulArray(parseInt(n / 2));
     
     ret = odd.reduce((acc, num) => {
         acc.push(num * 2 - 1);
         
         return acc;
     }, []);
     
     console.log(ret);
     
     even.reduce((acc, num) => {
         acc.push(num * 2);
         
         return acc;
     }, ret);
     
     
     numDictionary[n] = ret;
     
     return ret;
 };