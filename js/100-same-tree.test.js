import { describe, it, expect } from 'vitest';
import isSameTree from './100-same-tree';

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


describe('Same Tree', () => {
    // Helper to build trees easily for readability
    const buildTree = (values) => {
        if (!values || values.length === 0) return null;

        const nodes = values.map(val => val === null ? null : new TreeNode(val));
        const root = nodes[0];
        const queue = [root];
        let i = 1;

        while (queue.length > 0 && i < nodes.length) {
            const node = queue.shift();
            if (node) {
                node.left = nodes[i++] || null;
                if (i < nodes.length) {
                    node.right = nodes[i++] || null;
                }
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return root;
    };

    describe('Base Cases', () => {
        it('should return true for two empty trees', () => {
            expect(isSameTree(null, null)).toBe(true);
        });

        it('should return false if one tree is empty and the other is not', () => {
            const p = new TreeNode(1);
            expect(isSameTree(p, null)).toBe(false);
            expect(isSameTree(null, p)).toBe(false);
        });
    });

    describe('Identical Trees', () => {
        it('should return true for single node trees with same value', () => {
            const p = new TreeNode(1);
            const q = new TreeNode(1);
            expect(isSameTree(p, q)).toBe(true);
        });

        it('should return true for structurally identical trees with same values', () => {
            // Example 1: p = [1,2,3], q = [1,2,3]
            const p = buildTree([1, 2, 3]);
            const q = buildTree([1, 2, 3]);
            expect(isSameTree(p, q)).toBe(true);
        });

        it('should return true for deeper identical trees', () => {
            const p = buildTree([1, 2, 3, 4, 5, 6, 7]);
            const q = buildTree([1, 2, 3, 4, 5, 6, 7]);
            expect(isSameTree(p, q)).toBe(true);
        });
    });

    describe('Structural Differences', () => {
        it('should return false if structure differs (left vs right child)', () => {
            // Example 2: p = [1,2], q = [1,null,2]
            const p = buildTree([1, 2]);
            const q = buildTree([1, null, 2]);
            expect(isSameTree(p, q)).toBe(false);
        });

        it('should return false if one side is missing a node', () => {
            const p = buildTree([1, 2, 3]);
            const q = buildTree([1, 2]); // Missing right child of root
            expect(isSameTree(p, q)).toBe(false);
        });
    });

    describe('Value Differences', () => {
        it('should return false if root values differ', () => {
            const p = new TreeNode(1);
            const q = new TreeNode(2);
            expect(isSameTree(p, q)).toBe(false);
        });

        it('should return false if leaf values differ', () => {
            // Example 3: p = [1,2,1], q = [1,1,2]
            const p = buildTree([1, 2, 1]);
            const q = buildTree([1, 1, 2]);
            expect(isSameTree(p, q)).toBe(false);
        });

        it('should return false if internal node values differ', () => {
            const p = buildTree([1, 2, 3]);
            const q = buildTree([1, 9, 3]);
            expect(isSameTree(p, q)).toBe(false);
        });
    });

    describe('Constraints & Edge Cases', () => {
        it('should handle negative values correctly', () => {
            const p = new TreeNode(-10);
            const q = new TreeNode(-10);
            const r = new TreeNode(-100);

            expect(isSameTree(p, q)).toBe(true);
            expect(isSameTree(p, r)).toBe(false);
        });

        it('should handle boundary values (-10^4 and 10^4)', () => {
            const p = new TreeNode(-10000);
            const q = new TreeNode(-10000);
            const r = new TreeNode(10000);

            expect(isSameTree(p, q)).toBe(true);
            expect(isSameTree(p, r)).toBe(false);
        });

        it('should handle large identical trees (near constraint limit)', () => {
            // Creating a tree with ~100 nodes
            const values = Array.from({ length: 100 }, (_, i) => i);
            const p = buildTree(values);
            const q = buildTree(values);
            expect(isSameTree(p, q)).toBe(true);
        });
    });
});   