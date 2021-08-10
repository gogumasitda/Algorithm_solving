// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/64064
// Level 3

function solution(user_id, banned_id) {
    var answer = 0;
    
    const visited = user_id.reduce((dict, uId) => {
        dict[uId] = 0;
        return dict;
    }, {});
    const candidateArr = [];
    dictUpdate(user_id, banned_id, candidateArr);
    
    answer = countCases(visited, candidateArr);

    return answer;
}

const dictUpdate = function(user_id, banned_id, candidateArr) {
    banned_id.forEach((bId) => {
        const candidateUid = [];
        
        user_id.forEach((uId) => {
            if (isMatched(uId, bId) === true) {
                candidateUid.push(uId);
            }
        })
        
        candidateArr.push(candidateUid);
    })
}

const isMatched = function(user_id, banned_id) {
    if (user_id.length !== banned_id.length) return false;
    
    for (let i = 0; i < user_id.length; i++) {
        if (banned_id[i] === '*') continue;
        if (banned_id[i] === user_id[i]) continue;
        
        return false;
    }
    
    return true;
}



const countCases = function(visited, candidateArr) {    
    const casesSet = new Set();
    
    dfs(0, casesSet, [], visited, candidateArr);
    
    return casesSet.size;
}

const dfs = function(depth, casesSet, candidateAnswer, visited, candidateArr) {
    if (depth === candidateArr.length) {
        const answerCase = candidateAnswer.slice().sort();
        casesSet.add(answerCase.join(''));
        return;
    }
    
    candidateArr[depth].forEach((element) => {
        if (visited[element] === 1) return;
        
        visited[element] = 1;
        candidateAnswer.push(element);
        dfs(depth + 1, casesSet, candidateAnswer, visited, candidateArr);
        candidateAnswer.pop();
        visited[element] = 0;
    })
}