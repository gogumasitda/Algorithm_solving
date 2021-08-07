// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/12900
// Level 3

function solution(n) {
    var answer = 0;
    
    const dp = Array.from({length: n + 1}, () => 0);
    
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        dp[i] %= 1000000007;
    }
    
    answer = dp[n];
    
    return answer;
}