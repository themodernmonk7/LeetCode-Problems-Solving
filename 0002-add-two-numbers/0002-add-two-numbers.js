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
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let current = result
    let carry = 0

    while(l1 || l2 || carry) {
        let sum = carry

        if(l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if(l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
    }
    return result.next
};