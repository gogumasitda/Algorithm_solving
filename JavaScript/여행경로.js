// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43164
// Level 3

function solution(tickets) {
    debugger
    var answer = ["ICN"];
    const visited = Array(tickets.length).fill(0);
    
    tickets.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] <= b[1] ? -1 : 1;
        }
        else {
            return a[0] <= b[0] ? -1 : 1;
        }
    });
    
    console.log(tickets);
    
    dfs(0, answer, visited, tickets);

    return answer;
}

const dfs = function(depth, answer, visited, tickets) {
    if (depth === visited.length) {
        return true;
    }
    
    for (let idx = 0; idx < visited.length; idx++) {
        const ticket = tickets[idx];
        if (answer[answer.length - 1] != ticket[0]) continue;
        if (visited[idx] === 1) continue;
        
        visited[idx] = 1;
        answer.push(ticket[1]);
        const isDone = dfs(depth + 1, answer, visited, tickets);
        if (isDone === true) return true;
        answer.pop();
        visited[idx] = 0;
    }
    
    return false;
}