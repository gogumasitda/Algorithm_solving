// 프로그래머스
// Level 1
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const engTonum = {
        'ze': '0',
        'on': '1',
        'tw': '2',
        'th': '3' ,
        'fo': '4',
        'fi': '5',
        'si': '6',
        'se': '7',
        'ei': '8',
        'ni': '9'
                     }
    
    const step = [2, 1, 1, 3, 2, 2, 1, 3, 3, 2];

    const strLength = s.length;    
    var answer = '';
    
    let temp = '';
    for (let i = 0; i < strLength; i++) {
        if (isNaN(s[i]) === false) {
            temp = '';
            answer += s[i];
        }
        else {
            temp += s[i];
            if (temp.length === 2) {
                let num = engTonum[temp];
                answer += num;
                i += step[parseInt(num)];
                temp = '';
            }
        }
    }
    
    return parseInt(answer);
}