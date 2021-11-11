/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    
    let overflow = 0;
    let firstCurrent = l1
    let secondCurrent = l2
    let newLinkedList = {head: null};
    let tail;
    
    while (firstCurrent || secondCurrent) {
        let sum;
        if (firstCurrent === null) { 
            sum = secondCurrent.val; 
        } else if (secondCurrent === null) {
            sum = firstCurrent.val;
        } else {
            sum = (firstCurrent.val || 0) + (secondCurrent.val || 0);
        }
        if (overflow !== 0) {
            sum += 1;
            overflow = 0;
        }
        if (sum > 9) {
            sum -= 10; 
            overflow = 1;
        }
        if (newLinkedList.head === null) {
            newLinkedList.head = new ListNode(sum);
            tail = newLinkedList.head;
        } else {
            tail.next = new ListNode(sum);
            tail = tail.next;
        }
        if (firstCurrent) {firstCurrent = firstCurrent.next;}
        if (secondCurrent) {secondCurrent = secondCurrent.next;}
        
    }
    if (overflow === 1){
        tail.next = new ListNode(1);
    }
    return newLinkedList.head; 
};








