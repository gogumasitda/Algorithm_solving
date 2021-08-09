// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/67258
// Level 3

function solution(gems) {
    var answer = [];
    
    const countOfGems = new Set(gems).size;
    const candidateAnswer = [];
    const gemsMap = new Map();
    
    gems.forEach((gem, idx) => {
        gemsMap.delete(gem);
        gemsMap.set(gem, idx);
        
        if (gemsMap.size === countOfGems) {
            let iter = gemsMap.values();
            candidateAnswer.push([iter.next().value + 1, idx + 1]);
        }
    })
    
    candidateAnswer.sort((a, b) => {
        const aLen = a[1] - a[0];
        const bLen = b[1] - b[0];
        if (aLen === bLen) return a[0] - b[0];
        return aLen - bLen;
    })
    
    answer = candidateAnswer[0];
    
    return answer;
}