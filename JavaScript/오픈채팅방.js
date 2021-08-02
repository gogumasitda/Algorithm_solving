// 프로그래머스
// Level 2
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    var answer = [];
    
    const textForm = ["님이 들어왔습니다.", "님이 나갔습니다."];
    
    const que = [];
    const idDict = {};
    
    record.map((raw) => {
        let strArr = raw.split(' ');
        
        if (strArr.length === 3) {
            idDict[strArr[1]] = strArr[2];
        }
        if (strArr[0][0] !== 'C') que.push([strArr[0], strArr[1]]);
    })
    
    que.map((data) => {
        let msg = data[0];
        let id = data[1];
        let opr = 1;
        
        if (msg === "Enter") opr = 0;
        
        answer.push(idDict[id] + textForm[opr]);
    })
    
    return answer;
}