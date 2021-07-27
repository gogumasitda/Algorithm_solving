// Leetcode
// 126. Word Ladder II
// bfs, hard

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
 var findLadders = function(beginWord, endWord, wordList) {
    let dictionary = {
        [beginWord]: [],
    };
    
    let ret = [];
    
    init(dictionary, wordList);
    linkWord(dictionary);
    bfs(ret, dictionary, beginWord, endWord);
    
    return ret;
};

let init = function(dictionary, wordList) {
    for (word of wordList) {
        dictionary[word] = [];
    }
}

let countDiff = function(string1, string2) {
    let diffCnt = 0;
    
    for (let i = 0; i < string1.length; i++) {
        if (i >= string2.length || string1[i] !== string2[i]) diffCnt++;
        if (diffCnt > 1) return false;
    }
    
    return true;
}

let linkWord = function(dictionary) {
    let keys = Object.keys(dictionary);
    let dictLength = keys.length;
    
    
    for (let i = 0; i < dictLength - 1; i++) {
        for (let j = i + 1; j < dictLength; j++) {
            if (countDiff(keys[i], keys[j])) {
                dictionary[keys[i]].push(keys[j]);
                dictionary[keys[j]].push(keys[i]);
            }
        }
    }
}


let bfs = function(ret, dictionary, beginWord, endWord) {
    let que = [[beginWord]];
    let wordLength = 1001;
    let set = new Set();

    while (que.length) {
        let now = que.shift();
        let lastNode = now[now.length - 1];
        set.add(lastNode);
        
        if (lastNode === undefined) break;
        if (now.length <= wordLength && lastNode === endWord) {
            ret.push(now);
            wordLength = now.length;
            continue;
        }
        
        if (now.length >= wordLength) continue;
        
        for (node of dictionary[lastNode]) {
            if (set.has(node) === true) continue;
            
            que.push([...now, node]);
        }
    }
}