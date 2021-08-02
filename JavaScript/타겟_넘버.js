// 프로그래머스
// Level 2
// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target, start = 0, sum = 0) {
    let answer = 0;
    
    if (start === numbers.length) {
        answer = target === sum ? 1 : 0;
        return answer;
    }
    
    answer += solution(numbers, target, start + 1, sum + numbers[start]);
    answer += solution(numbers, target, start + 1, sum - numbers[start]);
    
    return answer;
}