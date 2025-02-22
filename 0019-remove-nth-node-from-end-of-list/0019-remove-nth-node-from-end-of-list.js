/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head

    let slow = dummy
    let fast = dummy

    for(let i = 0; i <= n; i++) {
        fast = fast.next
    }

    // Now move the both pointers one step at a timek until fast reaches the end
    while(fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
};