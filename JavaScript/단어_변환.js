// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/43163
// Level 3

function solution(begin, target, words) {
    var answer = 0;
    
    const connectDict = {};
    
    init(connectDict, [begin, ...words]);
    
    answer = bfs(connectDict, begin, target);
    
    
    return answer;
}

const init = function(dict, words) {
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (countDiff(words[i], words[j]) === true) {
                dict[words[i]] = (dict[words[i]] || []).concat([words[j]]);
                dict[words[j]] = (dict[words[j]] || []).concat([words[i]]);
            }
        }
    }
}

const countDiff = function(a, b) {
    let count = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) count++;
        if (count > 1) return false;
    }
    
    return true;
}


const bfs = function(dict, begin, target) {
    const que = [[begin, 0]];
    const visited = new Set(begin);
    
    while (que.length) {
        const [curWord, curLen] = que.shift();
        
        if (curWord === target) return curLen;
        
        dict[curWord].forEach((nxtWord) => {
            if (visited.has(nxtWord) === true) return;
            
            visited.add(nxtWord);
            que.push([nxtWord, curLen + 1]);
        })
    }
    
    return 0;
}
