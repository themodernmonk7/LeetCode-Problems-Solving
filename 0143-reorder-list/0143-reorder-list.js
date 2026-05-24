/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return

    // find the midpoint
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse the second half
    let prev = null
    let current = slow.next
    // break first hafl
    slow.next = null
    while(current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    // join them again
    // prev = head of the reversed second half
    let first = head
    let second = prev

    while(second) {
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1

        first = temp1
        second = temp2
    }
};