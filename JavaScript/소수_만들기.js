// 프로그래머스
// Level 1
// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
    var answer = -1;
    
    const primeNumList = getPrime();
    
    answer = countPrime(nums, primeNumList);
    
    return answer;
}

const getPrime = function() {
    let visited = Array.from({length: 3001}, () => 0);
    
    for (let i = 2; i <= 55; i++) {
        if (visited[i] === 1) continue;
        
        for (let num = 2 * i; num <= 3000; num += i) {
            visited[num] = 1;
        }
    }
    
    return visited;
}

const countPrime = function(nums, primes) {
    let count = 0;
    const listSize = nums.length;
    
    for (let first = 0; first < listSize - 2; first++) {
        for (let second = first + 1; second < listSize - 1; second++) {
            for (let third = second + 1; third < listSize; third++) {
                const num = nums[first] + nums[second] + nums[third];
                if (primes[num] === 0) count++;
            }
        }
    }
    
    return count;
}