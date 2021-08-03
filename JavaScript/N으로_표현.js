// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42895#
// Level 3

function solution(N, number) {
    const dp = [];
    
    for (let i = 1; i <= 8; i++) {
        let set = new Set();
        
        set.add(Number(String(N).repeat(i)));
        
        for (let j = i - 1; j > 0; j--) {
            const left = i - j - 1;
            const right = j - 1;

            
            for (let leftNum of dp[left]) {
                for (let rightNum of dp[right]) {
                    set.add(leftNum + rightNum);
                    set.add(leftNum - rightNum);
                    set.add(leftNum * rightNum);
                    set.add(parseInt(leftNum / rightNum));
                }
            }
            
            set.delete(0);
        }
        if (set.has(number)) return i;
        
        dp.push(set);
    }
    
    return -1;
}