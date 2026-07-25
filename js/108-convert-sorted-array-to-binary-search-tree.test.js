import { describe, it, expect } from 'vitest';
import sortedArrayToBST from './108-convert-sorted-array-to-binary-search-tree';

// / --- TEST HELPERS ---/

// Helper 1: Verify if the tree is a valid BST and collect elements via inorder traversal
function isValidBSTAndGetInorder(root, elements = []) {
  if (!root) return true;
  
  const leftValid = isValidBSTAndGetInorder(root.left, elements);
  elements.push(root.val);
  const rightValid = isValidBSTAndGetInorder(root.right, elements);
  
  return leftValid && rightValid;
}

// Helper 2: Check if the tree is height-balanced
function getHeightAndCheckBalance(root) {
  if (!root) return { height: 0, isBalanced: true };

  const left = getHeightAndCheckBalance(root.left);
  const right = getHeightAndCheckBalance(root.right);

  const isBalanced = 
    left.isBalanced && 
    right.isBalanced && 
    Math.abs(left.height - right.height) <= 1;

  return {
    height: Math.max(left.height, right.height) + 1,
    isBalanced
  };
}


describe('Convert Sorted Array to Binary Search Tree', () => {
  
  // Custom assertion utility to validate any output tree against the rules
  const assertValidBalancedBST = (root, originalArray) => {
    if (originalArray.length === 0) {
      expect(root).toBeNull();
      return;
    }

    // 1. Check if height-balanced
    const balanceCheck = getHeightAndCheckBalance(root);
    expect(balanceCheck.isBalanced).toBe(true);

    // 2. Check if valid BST and collect elements
    const inorderElements = [];
    const isBST = isValidBSTAndGetInorder(root, inorderElements);
    expect(isBST).toBe(true);

    // 3. Check if it contains the exact same sorted elements
    expect(inorderElements).toEqual(originalArray);
  };

  it('should handle Example 1: [-10, -3, 0, 5, 9]', () => {
    const nums = [-10, -3, 0, 5, 9];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
  });

  it('should handle an empty array', () => {
    const nums = [];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
  });

  it('should handle a single element array', () => {
    const nums = [42];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
    expect(result.val).toBe(42);
  });

  it('should handle a two-element array (even length balance check)', () => {
    const nums = [25, 55];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
  });

  it('should handle large or highly sequential arrays', () => {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
  });
  
  it('should handle arrays with negative and positive values mixed', () => {
    const nums = [-5, -2, -1, 0, 3, 7, 12];
    const result = sortedArrayToBST(nums);
    assertValidBalancedBST(result, nums);
  });
});