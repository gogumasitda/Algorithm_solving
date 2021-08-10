// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/17678
// Level 3

function solution(n, t, m, timetable) {
    var answer = '';
    let candidateAnswer = 0;
    
    const startTime = 9 * 60;
    
    const intTimeTable = timetable.map((ele) => convertToInt(ele)).sort((a, b) => a - b);
    const intBusTimeTable = Array.from({length: n}, (v, i) => {
        return startTime + t * i;
    });
    
    console.log(intTimeTable);
    
    let curBusIdx = 0;
    let countCurBusCrew = 0;
    
    intTimeTable.forEach((crewTimeInfo, idx) => {
        if (curBusIdx >= intBusTimeTable.length) {
            return;
        }
        
        if (crewTimeInfo <= intBusTimeTable[curBusIdx]) {
            countCurBusCrew++;
            
            if (countCurBusCrew == m) {
                candidateAnswer = intTimeTable[idx] - 1;
                curBusIdx++;
                countCurBusCrew = 0;
                return;
            }
        }
        
        while (curBusIdx < intBusTimeTable.length
               && ((countCurBusCrew < m && idx + 1 === intTimeTable.length) 
               || crewTimeInfo > intBusTimeTable[curBusIdx])) {
            
            candidateAnswer = intBusTimeTable[curBusIdx];
            curBusIdx++;
            countCurBusCrew = 1;
        }
    });
    
    answer = convertToStr(candidateAnswer);
    
    return answer;
}

const convertToInt = function(str) {
    const parsedStr = str.split(':').map((ele) => parseInt(ele));
    const intTime = parsedStr[0] * 60 + parsedStr[1];
    
    return intTime;
}

const convertToStr = function(num) {
    const hour = ('00' + parseInt(num / 60)).slice(-2);
    const min = ('00' + parseInt(num % 60)).slice(-2);
    
    return `${hour}:${min}`;
}