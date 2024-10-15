import { isHeightBalanced } from "../src/q3";
import { TreeNode } from "../src/structures";

describe("isHeightBalanced - Additional Test Cases", () => {
  it("should return true for a complete binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should return true for a perfect binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should return false for a tree unbalanced due to extra depth on left subtree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4))),
      new TreeNode(5)
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should return false for a tree unbalanced due to extra depth on right subtree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle a skewed left tree (completely unbalanced)", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4))),
      null
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle a skewed right tree (completely unbalanced)", () => {
    const root = new TreeNode(
      1,
      null,
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should return true for a balanced tree with varying branch lengths", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5))
    );
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should return false for a tree unbalanced at a lower level", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6))),
      new TreeNode(3)
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle trees with multiple unbalanced points", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8)))
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should return false for a balanced tree with one side deeper but unbalanced overall", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)),
      new TreeNode(3)
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle trees with null left and right children at various levels", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(4)),
      new TreeNode(3, new TreeNode(5), null)
    );
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should handle a complex unbalanced tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(4, new TreeNode(6, new TreeNode(8))),
        new TreeNode(5)
      ),
      new TreeNode(3)
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should return false for a balanced tree with leaves at different levels", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5, new TreeNode(6), null))
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle a large balanced tree", () => {
    const leftSubtree = new TreeNode(
      2,
      new TreeNode(4, new TreeNode(8), new TreeNode(9)),
      new TreeNode(5, new TreeNode(10), new TreeNode(11))
    );

    const rightSubtree = new TreeNode(
      3,
      new TreeNode(6, new TreeNode(12), new TreeNode(13)),
      new TreeNode(7, new TreeNode(14), new TreeNode(15))
    );

    const root = new TreeNode(1, leftSubtree, rightSubtree);
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should handle a large unbalanced tree", () => {
    const leftSubtree = new TreeNode(
      2,
      new TreeNode(4, new TreeNode(8, new TreeNode(16)), new TreeNode(9)),
      new TreeNode(5, new TreeNode(10), new TreeNode(11))
    );

    const rightSubtree = new TreeNode(
      3,
      new TreeNode(6, new TreeNode(12), new TreeNode(13)),
      new TreeNode(7, new TreeNode(14), new TreeNode(15))
    );

    const root = new TreeNode(1, leftSubtree, rightSubtree);
    expect(isHeightBalanced(root)).toBe(true);
  });

  it("should handle a tree where imbalance is due to missing nodes at various levels", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5, null, new TreeNode(6)))
    );
    expect(isHeightBalanced(root)).toBe(false);
  });

  it("should handle a tree with multiple levels of single child nodes", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))),
      null
    );
    expect(isHeightBalanced(root)).toBe(false);
  });
});
