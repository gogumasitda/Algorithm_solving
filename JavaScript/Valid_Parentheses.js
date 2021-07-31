// Leetcode
// 20. Valid Parentheses, Easy

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = new Stack();
    const pre = '([{';
    const post = ')]}';
    
    for (data of s) {
        let index = post.indexOf(data);
        
        if (index == -1) {
            stack.push(data);
        }
        else if (pre[index] !== stack.pop()) return false;
    }
     
    if (stack.size() > 0) return false;

     return true;
};

class Stack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop() {
        return this.arr.pop();
    }

    size() {
        return this.arr.length;
    }
}