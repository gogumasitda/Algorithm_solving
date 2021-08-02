// 프로그래머스
// Level 2
// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s)
{
    const strLength = s.length;
    
    var answer = 1;
    
    const stack = [];
    
    for (let i = 0; i < strLength; i++) {
        if (stack.length > 0 && stack[stack.length - 1] == s[i]) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    
    
    if (stack.length > 0) answer = 0;
    
    return answer;
}