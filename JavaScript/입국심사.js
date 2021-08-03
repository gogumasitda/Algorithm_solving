// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43238
// Level 3

function solution(n, times) {
    let min = 0;
    let max = getMax(times) * n;
    var answer = max;
    
    while (min <= max) {
        let target = parseInt((min + max) / 2);

        if (manageCount(target, times) >= n) {
            answer = target;
            max = target - 1;
        }
        else {
            min = target + 1;
        }
    }
    
    return answer;
}

const getMax = function(arr) {
    let max = Math.max();
    
    arr.map(num => {
        if (max < num) max = num;
    });
    
    return max;
}


const manageCount = function(target, times) {
    let count = times.reduce((sum, cur) => {
        sum += Math.floor(target / cur);
        
        return sum;
    }, 0);
    
    return count;
}

