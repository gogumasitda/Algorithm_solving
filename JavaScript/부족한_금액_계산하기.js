// 프로그래머스
// Level 1
// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer = parseInt(price * (1 + count) * count / 2) - money;
    
    if (answer < 0) answer = 0;

    return answer;
}