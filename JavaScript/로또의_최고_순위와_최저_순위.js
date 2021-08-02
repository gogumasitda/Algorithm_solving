// 프로그래머스
// Level 1
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    const winTable = [6, 6, 5, 4, 3, 2, 1];
    
    var answer = [];
    
    const matchCount = matchNums(lottos, win_nums);
    const zeroCount = lottos.reduce((sum, cur) => sum + !cur, 0);
    
    answer = [winTable[matchCount + zeroCount], winTable[matchCount]];
    
    return answer;
}

const matchNums = function(lottos, win_nums) {
    let count = 0;
    
    let visited = Array.from({length: 46}, () => 0);
    
    win_nums.map(num => visited[num] = 1);
    
    lottos.map(num => count += visited[num]);
    
    return count;
}