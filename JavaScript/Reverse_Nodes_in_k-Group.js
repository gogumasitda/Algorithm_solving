// Leetcode
// 25. Reverse Nodes in k-Group, hard

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if (head === null) return head;
    
    let subTail = head;
    
    for (let i = 1; i < k; i++) {
        subTail  = subTail.next;
        if (subTail === null) return head;
    }
    
    let next= subTail.next;
    
    reverse(head, next);
    
    head.next = reverseKGroup(next, k);
    
    return subTail;
};


const reverse = function(head, tail) {
    let next, last = tail;
    
    while (head != last) {
        next = head.next;
        head.next = tail;
        tail = head;
        head = next;
    }
}