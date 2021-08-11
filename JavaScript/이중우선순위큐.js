// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42628
// Level 3

function solution(operations) {
    var answer = [];
    const pq = [];
    
    operations.map((opr) => {
        let [chr, num] = opr.split(' ');
        
        num = num * 1;
        
        if (chr === 'I') {
            pq.push(num);
        }
        else if (num === 1) {
            pq.sort((a, b) => a - b);
            pq.pop();
        }
        else {
            pq.sort((a, b) => a - b);
            pq.shift();
        }
    });
    
    pq.sort((a, b) => a - b);
    answer = [(pq.pop() || 0), (pq.shift() || 0)];
    return answer;
}