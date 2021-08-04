// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43162
// Level 3

function solution(n, computers) {
    const parent = Array.from({length: n});
    const visited = Array.from({length: n}, () => 0);
    let answer = 0;
    
    updateParent(parent, computers);
    
    for (let i = 0; i < n; i++) {
        const par = findParent(parent, i);
        
        if (visited[par] === 1) continue;
        visited[par] = 1;
        answer++;        
    }
    
    return answer;
}

    
const updateParent = function(parent, computers) {
    for (let i = 0; i < parent.length; i++) {
        if (parent[i] === undefined) parent[i] = i;
        for (let j = i + 1; j < parent.length; j++) {
            if (computers[i][j] === 0) continue;
            if (parent[j]) continue;
            parent[j] = i;
        }
    }
}


const findParent = function(parent, n) {
    const par = parent[n];
    if (par === n) return par;
    
    parent[n] = findParent(parent, parent[n]);
    
    return parent[n];
}