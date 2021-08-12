// 프로그래머스
// https://programmers.co.kr/learn/courses/30/lessons/42861
// Level 3

function solution(n, costs) {
    var answer = 0;
    
    const dist = Array.from({length: n}, () => Array(n).fill(Infinity));
    
    costs.forEach((distInfo) =>{
        const [a, b, cost] = distInfo;
        
        dist[a][b] = cost;
        dist[b][a] = cost;
    })
    
    const pq = new PriorityQue()
    const visited = Array(n).fill(false);
    let remainIslands = n;
    
    pq.push([0, 0]);
    
    while (remainIslands > 0) {
        const [curCost, curPos] = pq.pop();
        
        if (visited[curPos] === true) continue;
        
        visited[curPos] = true;
        answer += curCost;
        remainIslands--;
        
        dist[curPos].forEach((nxtCost, nxtPos) => {
            if (visited[nxtPos] === true) return;
            
            pq.push([nxtCost, nxtPos]);
        })
    }
    
    return answer;
}


class PriorityQue {
    #container;
    
    constructor() {
        this.#container = [0];
    }
    
    clear() {
        this.#container = [0];
    }
    
    _compare(a, b) {
        return this.#container[a][0] - this.#container[b][0];
    }
    
    _swap(a, b) {
        let tmp = this.#container[a];
        this.#container[a] = this.#container[b];
        this.#container[b] = tmp;
    }
    
    size() {
        return this.#container.length - 1;
    }
    
    top() {
        return this.#container[1];
    }
    
    push(data) {
        let child = this.#container.length;
        let parent = parseInt(child / 2);
        this.#container.push(data);
        
        while (parent > 0) {
            if (this._compare(parent, child) <= 0) break;
            
            this._swap(parent, child);
            
            child = parent;
            parent = parseInt(child / 2);
        }
    }
    
    pop() {
        if (this.#container.length === 1) {
            console.log("pq is empty");
            return [undefined, undefined];
        }
        
        const data = this.#container[1];
        
        this._swap(1, this.#container.length - 1);
        this.#container.pop();
        
        let par = 1,
            l = par * 2,
            r = l + 1,
            child;
        
        while (l < this.#container.length) {
            if (l === this.#container.length - 1 || this._compare(l, r) <= 0) child = l;
            else child = r;
            
            if (this._compare(par, child) <= 0) break;

            this._swap(par, child);
            
            par = child;
            l = child * 2;
            r = l + 1;
        }
        
        return data;
    }
}