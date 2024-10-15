import { intersection } from "../src/q2";

describe("intersection", () => {
  it("should return [2] when nums1 = [1,2,2,1] and nums2 = [2,2]", () => {
    const result = intersection([1, 2, 2, 1], [2, 2]);
    expect(result.sort()).toEqual([2]);
  });

  it("should return [9,4] or [4,9] when nums1 = [4,9,5] and nums2 = [9,4,9,8,4]", () => {
    const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result.sort()).toEqual([4, 9]);
  });

  it("should return an empty array when there is no intersection", () => {
    const result = intersection([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
  });

  it("should return unique elements even if arrays contain duplicates", () => {
    const result = intersection([1, 1, 2, 2], [2, 2, 3, 3]);
    expect(result).toEqual([2]);
  });

  it("should handle empty nums1 array", () => {
    const result = intersection([], [1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("should handle empty nums2 array", () => {
    const result = intersection([1, 2, 3], []);
    expect(result).toEqual([]);
  });

  it("should handle both arrays being empty", () => {
    const result = intersection([], []);
    expect(result).toEqual([]);
  });

  it("should handle arrays with negative numbers", () => {
    const result = intersection([-1, -2, -3], [-3, -4, -5]);
    expect(result).toEqual([-3]);
  });

  it("should handle arrays with zero", () => {
    const result = intersection([0, 1, 2], [0, 2, 4]);
    expect(result.sort()).toEqual([0, 2]);
  });

  it("should handle arrays with all elements intersecting", () => {
    const result = intersection([1, 2, 3], [1, 2, 3]);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  it("should handle large arrays", () => {
    const nums1 = Array.from({ length: 10 ** 6 }, (_, i) => i);
    const nums2 = Array.from({ length: 10 ** 6 }, (_, i) => i + 10 ** 6 / 2);
    const result = intersection(nums1, nums2);
    expect(result.sort()).toEqual(
      Array.from({ length: 10 ** 6 / 2 }, (_, i) => i + 10 ** 6 / 2)
    );
  });

  it("should handle arrays with repeated elements in both arrays", () => {
    const result = intersection([1, 1, 1, 2, 2], [2, 2, 3, 3]);
    expect(result).toEqual([2]);
  });

  it("should return unique elements when both arrays have the same repeated elements", () => {
    const result = intersection([2, 2, 2], [2, 2, 2]);
    expect(result).toEqual([2]);
  });
});
