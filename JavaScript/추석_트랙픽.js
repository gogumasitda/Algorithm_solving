// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/17676
// Level 3

function solution(lines) {
    var answer = 1;
    const que = [];
    const timeData = lines.reduce((table, time) => {
        let [date, ...timeInfo] = time.split(' ');
        
        let end = timeInfo[0].split(':').reduce((acc, cur) => {
            acc = acc * 60 + cur * 1000;
            return acc;
        }, 0);

        let start = end - timeInfo[1].substr(0, timeInfo[1].length - 1) * 1000 + 1;
        
        table.push([start, end]);
        return table;
    }, []);
    
    for (let log of timeData) {
        const startCount = getCount(log[0], timeData);
        const endCount = getCount(log[1], timeData);
        
        answer = Math.max(startCount, endCount, answer);
    }
    
    return answer;
}


const getCount = function(time, timeData) {
    const rangeStart = time;
    const rangeEnd = time + 1000;
    let count = 0;
    
    for (let compare of timeData) {
        if (rangeStart <= compare[0] && compare[0] < rangeEnd) count++;
        else if (rangeStart <= compare[1] && compare[1] < rangeEnd) count++;
        else if (rangeStart >= compare[0] && compare[1] >= rangeEnd) count++;
    }
    
    return count;
}