class Node {
    constructor(value) {
      this.value = value; 
      this.next = null; // 다음노드를 저장하는 변수
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; 
      this.tail = null;
      this._size = 0; // 리스트안의 노드 갯수를 나타냄.
    }
  }

  addToTail(value) {
    let addValue = new Node(value)
    if (this.head === null && this.tail === null) {
      this.head = addValue; 
      this.tail = addValue;
    }
    if (this.head !== null) {
      this.tail.next = addValue;
      this.tail = addValue;
    }
    this._size++
  }

  remove(value) {
	// 데이터가 비어있으므로 undefined 반환
    if (this.head === null) {
      return undefined;
    }
    // 리스트의 처음의 값이 찾는 값과 같다면
    if (this.head.value === value) {
    // this. head를 다음 노드로 지정하여 아무도 가리키지 않게 만들어 가비지콜렉터에 추가
      this.head = this.head.next;
      this._size--
    }
    let preNode = this.head;
    let curNode = this.head.next;
    // 리스트의 중간에 찾는 값이 존재하는지 확인
    // 찾는 값이 리스트에 없다면 curNode가 tail.next가 되면 null이므로 루프 종료됨.
    while (curNode) {
      if (curNode.value === value) {
        preNode.next = curNode.next
        this._size--
        break
      }
      else {
      // 찾는 값이 나올때까지 다음노드로 초기화됨.
        preNode = curNode;
        curNode = curNode.next;
      }
    }
  }

  getNodeAt(index) {
    // 리스트의 처음부터 탐색함
    let headNode = this.head;
    // 인덱스 넘버가 리스트의 크기를 초과한다면 undefined.
    if (index > this._size) {
      return undefined
    }
    else {
    // 인덱스 넘버에 도달할때까지 루프함.
      for (let i = 0; i < index; i++) {
      	// 다음 노드로 계속 초기화됨.
        headNode = headNode.next
      }
      return headNode;
    }
  }

  contains(value) {
    // 리스트의 처음부터 탐색함.
    let curNode = this.head;
    // 리스트에 값이 존재하지 않는다면 curNode는 null이 되므로 while루프는 종료되고 false가 리턴됨.
    while (curNode) {
      if (curNode.value === value) {
        return true
      }
      else {
      // 값을 찾을때까지 다음 노드로 초기화.
        curNode = curNode.next
      }
    }
    return false
  }

  indexOf(value) {
    // 리스트의 처음부터 탐색.
    let curNode = this.head;
    let count = 0
    while (curNode) {
    // 값을 찾는다면 count 횟수를 리턴.
      if (curNode.value === value) {
        return count
      }
      else {
        curNode = curNode.next
      }
      // 값을 찾을때까지 count는 누적됨. 
      count++
    }
    return -1
  }

  size() {
    return this._size
  }

class Node3 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

const header12 = Array.from({length: 5}, () => {
    const tmp = new Node3(null);
    return tmp;
});

