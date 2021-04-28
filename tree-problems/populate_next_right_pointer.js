//   Populating Next Right Pointers in Each Node II (LeetCode)

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// Approach 1 : using queue
// TC = O(n)
// SC = O(n)

var connect = function (root) {
  if (!root) return;
  if (!root.left && !root.right) return;

  const q = [];
  q.push(root);
  q.push(null);

  let prev = null;
  while (q.length !== 0) {
    let curr = q.shift();

    if (prev !== null) {
      prev.next = curr;
    }

    if (curr === null) {
      if (q.length !== 0) {
        q.push(null);
      }
    } else {
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
    prev = curr;
  }
  return root;
};
