/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) return true

  let leftTreeQueue = []
  let rightTreeQueue = []  

  leftTreeQueue.push(root.left)
  rightTreeQueue.push(root.right)

  while (leftTreeQueue.length && rightTreeQueue.length) {
    const currentLeftElement = leftTreeQueue.shift();
    const currentRightElement = rightTreeQueue.shift();

    if (currentLeftElement === null && currentRightElement === null) continue;
    if (currentLeftElement === null || currentRightElement === null) return false;
    if (currentLeftElement.val !== currentRightElement.val) return false;

    leftTreeQueue.push(currentLeftElement.left);
    leftTreeQueue.push(currentLeftElement.right);
    
    rightTreeQueue.push(currentRightElement.right);
    rightTreeQueue.push(currentRightElement.left);
  }
  return true
};