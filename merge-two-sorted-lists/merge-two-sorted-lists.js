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
var mergeTwoLists = function(l1, l2) {
    //create a new linked list
    let newList = {val: -1, next:null}
    // have a pointer to the tail
    let tail = newList;
    //while both lists still have values in them
    while (l1 && l2) {
        //compare the current vals if l1 greater
        if (l1.val > l2.val) {
            // set the pointers next to the current node
            tail.next = l2;
            // move l2 to the next node in the list
            l2 = l2.next
        // otherwise
        } else {
            // set the pointers next to the current node
            tail.next = l1;
            // move l1 to the next node in the list
            l1 = l1.next;
        }
        // point the tail the the next position available in the new list. 
        tail = tail.next
    }
    // set the pointer to the list with remaining elements, since the lists are sorted, these will be tacked onto the end of the new LL
    tail.next = l1 || l2
    //return the new linked list. 
    return newList.next;
};