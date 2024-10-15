import { isSameTree } from "../src/q4";
import { TreeNode } from "../src/structures";
describe("isSameTree", () => {
  it("should return true for identical trees with multiple nodes", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should return false for trees with different structures", () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, null, new TreeNode(2));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should return false for trees with same structure but different values", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
    const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should return true for two empty trees", () => {
    expect(isSameTree(null, null)).toBe(true);
  });

  it("should return false when one tree is empty and the other is not", () => {
    const p = new TreeNode(1);
    expect(isSameTree(p, null)).toBe(false);
    expect(isSameTree(null, p)).toBe(false);
  });

  it("should return true for single-node trees with the same value", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(1);
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should return false for single-node trees with different values", () => {
    const p = new TreeNode(1);
    const q = new TreeNode(2);
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should return true for larger identical trees", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    const q = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should return false for larger trees with different structures", () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should handle trees with multiple levels and null nodes", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(4)
    );
    const q = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(4)
    );
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should handle large identical trees", () => {
    const createTree = (): TreeNode => {
      const root = new TreeNode(1);
      let current = root;
      for (let i = 2; i <= 1000; i++) {
        current.right = new TreeNode(i);
        current = current.right;
      }
      return root;
    };
    const p = createTree();
    const q = createTree();
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should handle large different trees", () => {
    const createTree = (diffAt: number): TreeNode => {
      const root = new TreeNode(1);
      let current = root;
      for (let i = 2; i <= 1000; i++) {
        current.right = new TreeNode(i === diffAt ? i + 1 : i);
        current = current.right;
      }
      return root;
    };
    const p = createTree(500);
    const q = createTree(501);
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should return false when trees have the same values but different arrangements", () => {
    const p = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
    const q = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should handle skewed trees (left)", () => {
    const p = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    const q = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should handle skewed trees (right)", () => {
    const p = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    const q = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should return false for skewed trees with different structures", () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, null, new TreeNode(2));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("should handle trees with negative values", () => {
    const p = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
    const q = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
    expect(isSameTree(p, q)).toBe(true);
  });

  it("should return false when trees have same structure but different values", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(4));
    expect(isSameTree(p, q)).toBe(false);
  });
});
