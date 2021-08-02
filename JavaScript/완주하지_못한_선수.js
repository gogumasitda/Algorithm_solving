// 프로그래머스
// Level 1
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    var answer = '';
    
    const completeDict = {};
    
    for (let one of completion) {
        if (one in completeDict === false) {
            completeDict[one] = 1;
        }
        else {
            completeDict[one] += 1;
        }
    }
    
    for (let one of participant) {
        if (one in completeDict && completeDict[one] > 0) {
            completeDict[one] -= 1;
            continue;
        } 
        
        answer = one;
        break;
    }

    return answer;
}