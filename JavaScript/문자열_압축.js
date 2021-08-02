// 프로그래머스
// Level 2
// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    var answer = s.length;
    let halfLength = parseInt(s.length / 2);
    
    for (let cutLength = 1; cutLength <= halfLength; cutLength++) {        
        const shortStr = makeShort(cutLength, s);
        
        if (shortStr) {
            const shortLen = shortStr.length;

            if (answer > shortLen) {
                answer = shortLen;
            }
        }
    }
    
    return answer;
}

const makeShort = function(cutLen, s) {
    let shortStr = '';
    let strLength = s.length;
    let cur = 0;
    
    while (cur < strLength) {
        let next = cur + cutLen;
        let tempStr = s.substr(cur, cutLen);
        let count = 1;
        
        while (tempStr === s.substr(next, cutLen)) {
            count++;
            next += cutLen;
        }
        
        
        if (count > 1) {
            shortStr += count;
        }
        shortStr += tempStr;
        
        cur = next;
    }
    
    return shortStr;
}