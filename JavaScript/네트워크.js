// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43162
// Level 3

function solution(n, computers) {
    const parent = Array.from({length: n}, (v, i) => i);
    const visited = Array.from({length: n}, () => 0);
    let answer = 0;
    
    updateParent(parent, computers);
    
    const parSet = new Set();

    for (let i = 0; i < n; i++) {
        const par = findParent(parent, i);
        
        if (parSet.has(par) === true) continue;
        parSet.add(par);
        answer++;
    }
    
    return answer;
}

    
const updateParent = function(parent, computers) {
    for (let i = 0; i < parent.length; i++) {
        for (let j = 0; j < parent.length; j++) {
            if (computers[i][j] === 0) continue;
            
            const iPar = findParent(parent, i);
            const jPar = findParent(parent, j);

            if (iPar === jPar) continue;
            parent[jPar] = iPar;
        }
    }
}


const findParent = function(parent, n) {
    if (parent[n] === n) return parent[n];
    
    parent[n] = findParent(parent, parent[n]);
    
    return parent[n];
}