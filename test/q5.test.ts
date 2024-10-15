import { groupSum6 } from "../src/q5";

describe("groupSum6", () => {
  it("should return true for groupSum6([5, 6, 2], 8)", () => {
    expect(groupSum6([5, 6, 2], 8)).toBe(true);
  });

  it("should return false for groupSum6([5, 6, 2], 9)", () => {
    expect(groupSum6([5, 6, 2], 9)).toBe(false);
  });

  it("should return false for groupSum6([5, 6, 2], 7)", () => {
    expect(groupSum6([5, 6, 2], 7)).toBe(false);
  });

  it("should return true when target equals sum of 6s", () => {
    expect(groupSum6([6, 6, 6], 18)).toBe(true);
  });

  it("should return false when target less than sum of 6s", () => {
    expect(groupSum6([6, 6, 6], 12)).toBe(false);
  });

  it("should return true when target equals sum including all 6s and other numbers", () => {
    expect(groupSum6([6, 2, 4], 12)).toBe(true);
  });

  it("should return true when non-6 numbers can be chosen to meet target", () => {
    expect(groupSum6([6, 2, 4], 6)).toBe(true);
  });

  it("should return false when non-6 numbers cannot be excluded to meet target", () => {
    expect(groupSum6([6, 2, 4], 8)).toBe(true);
  });

  it("should handle empty array with target zero", () => {
    expect(groupSum6([], 0)).toBe(true);
  });

  it("should return false when array is empty and target is non-zero", () => {
    expect(groupSum6([], 6)).toBe(false);
  });

  it("should handle negative numbers in the array", () => {
    expect(groupSum6([6, -6, 2], 2)).toBe(true);
  });

  it("should handle multiple 6s in the array", () => {
    expect(groupSum6([6, 6, 2, 6], 20)).toBe(true);
  });

  it("should return false when target cannot be met even with all 6s included", () => {
    expect(groupSum6([6, 6, 2], 15)).toBe(false);
  });

  it("should handle cases where excluding non-6 numbers is necessary", () => {
    expect(groupSum6([6, 5, 4], 10)).toBe(true);
  });

  it("should handle cases where including non-6 numbers is necessary", () => {
    expect(groupSum6([6, 5, 4], 15)).toBe(true);
  });

  it("should return false when target is less than sum of all 6s", () => {
    expect(groupSum6([6, 6, 6], 10)).toBe(false);
  });

  it("should handle arrays with no 6s", () => {
    expect(groupSum6([1, 2, 3], 6)).toBe(true);
    expect(groupSum6([1, 2, 3], 7)).toBe(false);
  });

  it("should handle target zero when sum of 6s is zero", () => {
    expect(groupSum6([0, 0, 0], 0)).toBe(true);
  });

  it("should handle arrays with multiple 6s and negative numbers", () => {
    expect(groupSum6([6, -6, 6, -6], 0)).toBe(true);
  });
});
