// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/81303
// Level 3

function solution(n, k, cmd) {
    debugger
    var answer = Array(n).fill("O");
    const deleteStack = [];
    
    let totalCnt = n;
    const bucket = Array.from({length:Math.ceil(n / 1000)}, () => {
        if (totalCnt >= 1000) {
            totalCnt -= 1000;
            return 1000;
        }
        return totalCnt % 1000;
    })
    
    let curPos = k;
    
    cmd.forEach((opr) => {
        if (opr[0] === 'D') {
            curPos = down(answer, curPos, opr.substr(2) * 1, bucket);
        }
        else if (opr[0] === 'U') {
            curPos = up(answer, curPos, opr.substr(2) * 1, bucket);
        }
        else if (opr[0] === 'C') {
            delTable(answer, curPos, bucket, deleteStack);
            let nxtPos = down(answer, curPos, 1, bucket);
            if (nxtPos === -1) nxtPos = up(answer, curPos, 1, bucket);
            curPos = nxtPos;
        }
        else {
            const target = deleteStack.pop();
            restore(answer, target, bucket);
        }
    });
    
    
    return answer.join('');
}


const restore = function(answer, idx, bucket) {
    const bucketIdx = Math.floor(idx / 1000);
    answer[idx] = "O";
    bucket[bucketIdx]++;
}


const delTable = function(answer, idx, bucket, stack) {
    const bucketIdx = Math.floor(idx / 1000);
    stack.push(idx);
    answer[idx] = "X";
    bucket[bucketIdx]--;
}

const up = function(answer, idx, moveCnt, bucket) {
    let bucketIdx = Math.floor(idx / 1000);
    let pos = idx;
    
    for (let i = pos % 1000; i > 0; i--) {
        if (moveCnt <= 0) break;
        pos--;
        if (answer[pos] === 'O') moveCnt--;
    }
    
    while (bucketIdx > 0 && moveCnt > bucket[bucketIdx - 1]) {
        moveCnt -= bucket[bucketIdx - 1];
        bucketIdx--;
        pos -= 1000;
    }
    
    while (moveCnt > 0) {
        pos--;
        if (answer[pos] === 'O') moveCnt--;
    }
    
    return pos;
}

const down = function(answer, idx, moveCnt, bucket) {
    let bucketIdx = Math.floor(idx / 1000);
    let pos = idx;
    
    for (let i = 999 - (pos % 1000); i > 0; i--) {
        if (pos + 1 >= answer.length || moveCnt <= 0) break;
        pos++;
        if (answer[pos] === 'O') moveCnt--;
    }
    
    while (bucketIdx + 1 < bucket.length && moveCnt > bucket[bucketIdx + 1]) {
        moveCnt -= bucket[bucketIdx + 1];
        bucketIdx++;
        pos += 1000;
    }
    
    while (moveCnt > 0 && pos + 1 < answer.length) {
        pos++;
        if (answer[pos] === 'O') moveCnt--;
    }
    
    return moveCnt > 0 ? -1 : pos;
}