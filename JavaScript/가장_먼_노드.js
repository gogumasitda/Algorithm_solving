// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/49189
// Level 3

function solution(n, edge) {
    let answer = 0;
    const dist = {};
    
    edge.map((info) => {
        let [left, right] = info;
        
        if (left in dist) dist[left].push(right);
        else dist[left] = [right];
        if (right in dist) dist[right].push(left);
        else dist[right] = [left];
    })
    
    answer = bfs(n, dist);
    
    return answer;
}


const bfs = function(n, dist) {
    const visited = Array.from({length: n + 1}, ()=>0);
    
    visited[1] = 1;
    const que = [[1, 0]];   // nodeIdx, dist
    
    let maxDistCount = 0;
    let maxDist = 0;
    
    while (que.length > 0) {
        const [curNode, curDist] = que.shift();
        
        if ((curDist > 0) && (curDist === maxDist)) {
            maxDistCount++;
        }
        else if (curDist > maxDist) {
            maxDist = curDist;
            maxDistCount = 1;
        }
        
        if (curNode in dist === false) continue;
        
        for (let nextNode of dist[curNode]) {
            if (visited[nextNode] === 1) continue;
            
            visited[nextNode] = 1;
            que.push([nextNode, curDist + 1]);
        }
    }
    
    return maxDistCount;
}