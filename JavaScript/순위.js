// Leetcode
// https://programmers.co.kr/learn/courses/30/lessons/49191#
// Level 3

function solution(n, results) {
    let answer = 0;
    const dist = Array.from({length: n + 1}, () => Array(n + 1).fill(false));
    
    for (const [winner, loser] of results) {
        dist[winner][loser] = true;
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                const newDist = (dist[i][k] && dist[k][j]);
                if (newDist == true) dist[i][j] = true;
            }
        }
    }
    
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= n; j++) {
            if ((dist[i][j] || dist[j][i]) == true) {
                count++;
            }
        }
        
        if (count === n - 1) answer++;
    }
    
    return answer;
}