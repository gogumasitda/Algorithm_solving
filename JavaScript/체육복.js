// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42862
// Greedy, Level 1

function solution(n, lost, reserve) {
    var answer = n - lost.length;
    
    const spare = Array.from({length: n + 2}, () => 0);
    reserve.map((num) => {
        spare[num] = 1;
    })
    
    lost.sort((a, b) => a - b);
    
    lost.forEach((num) => {
        const pre = num - 1;
        const post = num + 1;
        if (spare[num] === 1) {
            spare[num] = 0;
            answer++;
        }
        else if (spare[pre] === 1) {
            spare[pre] = 0;
            answer++;
        }
        else if (spare[post] === 1) {
            spare[post] = 0;
            answer++;
        }
    })
    return answer;
}