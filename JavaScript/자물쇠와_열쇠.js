// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/60059
// Level 3

function solution(key, lock) {
    var answer = true;
    
    const totalZeroCnt = lock.reduce((total, arr) => {
        return total + arr.reduce((acc, num) => {
            if (num === 0) return acc + 1;
            return acc;
        }, 0);
    }, 0);
    
    const keys = [];
    
    for (let i = 0; i < 4; i++) {
        keys.push(key);
        key = rotate(key);
    }
    
    answer = compare(keys, lock, totalZeroCnt);
    
    return answer;
}

const rotate = function(key) {
    const M = key.length;
    const tempArr = Array.from({length:M}, () => Array(M).fill(0));
    
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < M; c++) {
            tempArr[c][M - 1 - r] = key[r][c];
        }
    }
    
    return tempArr;
}

const compare = function(keys, lock, totalZeroCnt) {
    const N = lock.length;
    const M = keys[0].length;
    const paddedLock = addPadding(N, M, lock);
    
    
    for (let sr = 1; sr < M + N; sr++) {
        for (let sc = 1; sc < M + N; sc++) {
            for (let d = 0; d < 4; d++) {
                const key = keys[d];
                let zeroCount = totalZeroCnt;
                for (let r = 0; r < M; r++) {
                    const lockR = sr + r;
                    for (let c = 0; c < M; c++) {
                        const lockC = sc + c;
                        if (lockR < M || lockR >= M + N
                            || lockC < M || lockC >= M + N) {
                            continue;
                        }
                        
                        if (key[r][c] === paddedLock[lockR][lockC]) {
                            zeroCount = Infinity;
                            break;
                        }
                        
                        if (paddedLock[lockR][lockC] === 0) {
                            zeroCount--;
                        }
                    }
                    
                    if (zeroCount === Infinity) break;
                }
                
                if (zeroCount === 0) return true;
            }
        }
    }
    
    return false;
}

const addPadding = function(N, M, lock) {
    const paddedLock = Array.from({length: N + 2 * M}, () => Array(N + 2 * M).fill(0));
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            paddedLock[r + M][c + M] = lock[r][c];
        }
    }
    
    return paddedLock;
}