/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
  const set = new Set(nums)

//   first remove the leading nodes
  while(head && set.has(head.val)) {
    head = head.next
  }
  let current = head

  while(current && current.next) {
    if(set.has(current.next.val)) {
        current.next = current.next.next
    } else {
        current = current.next
    }
  }  

  return head
};