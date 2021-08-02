// 프로그래머스
// Level 2
// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
    var answer = w * h;
    
    // y = h + (h/w) * x
    [w, h] = [Math.min(w, h), Math.max(w, h)];
    const gcd = GCD(h, w);
    
    const sectorX = w / gcd;
    const sectorY = h / gcd;
    const cutBlockCnt = sectorX + sectorY - 1;
    const sectorCnt = gcd;
    
    const totalCutBlock = (cutBlockCnt * sectorCnt);
    
    return answer - totalCutBlock;
}

const GCD = function(a, b) {
    if (b === 0) return a;

    return GCD(b, a % b);
}