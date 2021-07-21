// Leetcode
// 838. Push Dominoes

/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
    const dominoesArr = dominoes.split('');
    
    let move = function(left, right, status) {
        for (let i = left; i <= right; ++i) {
            dominoesArr[i] = status;
        }
    }
    
    let cur = [dominoesArr[0], 0];
    
    for (let i = 0; i < dominoesArr.length; i++) {
        if (cur[0] == 'L') {
            cur = [dominoesArr[i], i];
            continue;
        }

        if (dominoesArr[i] == '.') continue;
        
        if (dominoesArr[i] == 'L') {
            if (cur[0] == 'R') {
                let len = i - cur[1];
                let flag = len % 2;
                let half = Math.floor(cur[1] + (len / 2));
                
                // 짝
                if (flag) {
                    move(cur[1], half, 'R');
                    move(half + 1, i, 'L');
                }
                // 홀
                else {
                    move(cur[1], half - 1, 'R');
                    move(half + 1, i, 'L');
                }
            }
            else {
                move(cur[1], i, 'L');
            }
        }
        else if (dominoesArr[i] == 'R') {
            if (cur[0] == 'R') {
                move(cur[1], i, 'R');
            }
        }
        
        cur = [dominoesArr[i], i];
    }
    
    if (cur[0] == 'R') move(cur[1], dominoesArr.length - 1, 'R');
    
    return dominoesArr.join('');
};