// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/72413?language=javascript
// Level 3

function solution(n, s, a, b, fares) {
    var answer = 0;
    
    const costTable = Array.from(Array(n + 1), () => {
        return Array(n + 1).fill(Math.min());
    });
    
    for (let i = 1; i <= n; i++) {
        costTable[i][i] = 0;
    }
    
    fares.map((data) => {
       let [a, b, cost] = data;
        costTable[a][b] = cost;
        costTable[b][a] = cost;
    });
    
    updatePathCost(n, costTable);
    
    answer = getBestCost(n, s, a, b, costTable);
    
    return answer;
}


const updatePathCost = function(n, costTable) {
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                const newCost = costTable[i][k] + costTable[k][j];
                if (costTable[i][j] > newCost) {
                    costTable[i][j] = newCost;
                }
            }
        }
    }
}

const getBestCost = function(n, s, a, b, costTable) {
    let bestCost = Math.min();
    
    for (let i = 1; i <= n; i++) {
        const cost = costTable[s][i] + costTable[i][a] + costTable[i][b];
        if (bestCost > cost) bestCost = cost;
    }
    
    return bestCost;
}