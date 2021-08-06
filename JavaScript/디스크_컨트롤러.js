// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42627
// Level 3

function solution(jobs) {
    var answer = 0;
    
    jobs.sort((a, b) => {
        return a[0] - b[0];
    })
    
    const workQue = [];
    let curTime = 0;
    const jobsCount = jobs.length;
    
    while (jobs.length > 0 || workQue.length > 0) {
        
        while (jobs.length > 0 && jobs[0][0] <= curTime) {
            workQue.push(jobs.shift());
        }
        
        workQue.sort((a, b) => {
            return a[1] - b[1];
        })
        
        if (workQue.length > 0) {
            curTime += workQue[0][1];
            answer += curTime - workQue.shift()[0];
        }
        else {
            curTime = jobs[0][0];
        }
    }
    
    return parseInt(answer / jobsCount);
}