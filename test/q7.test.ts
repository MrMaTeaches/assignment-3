import { mountainPeak } from "../src/q7";

describe("mountainPeak", () => {
  it("should return 1 for arr = [0, 1, 0]", () => {
    const arr = [0, 1, 0];
    expect(mountainPeak(arr)).toBe(1);
  });

  it("should return 1 for arr = [0, 2, 1, 0]", () => {
    const arr = [0, 2, 1, 0];
    expect(mountainPeak(arr)).toBe(1);
  });

  it("should return 1 for arr = [0, 10, 5, 2]", () => {
    const arr = [0, 10, 5, 2];
    expect(mountainPeak(arr)).toBe(1);
  });

  it("should return 2 for arr = [3, 4, 5, 1]", () => {
    const arr = [3, 4, 5, 1];
    expect(mountainPeak(arr)).toBe(2);
  });

  it("should return 3 for arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]", () => {
    const arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];
    expect(mountainPeak(arr)).toBe(2);
  });

  it("should return 4 for arr = [0, 2, 4, 6, 8, 7, 5, 3, 1]", () => {
    const arr = [0, 2, 4, 6, 8, 7, 5, 3, 1];
    expect(mountainPeak(arr)).toBe(4);
  });

  it("should return correct index for large array", () => {
    const peak = 5000;
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: peak - 1 }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle array with minimum length of 3", () => {
    const arr = [1, 2, 1];
    expect(mountainPeak(arr)).toBe(1);
  });

  it("should handle a large mountain array with peak in the middle", () => {
    const n = 10000;
    const peak = Math.floor(n / 2);
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle a large mountain array with peak near the beginning", () => {
    const n = 10000;
    const peak = 100; // Peak at index 99
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle a large mountain array with peak near the end", () => {
    const n = 10000;
    const peak = n - 100; // Peak at index n - 101
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle a large mountain array with peak in the middle", () => {
    const n = 10 ** 7;
    const peak = Math.floor(n / 2);
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle a large mountain array with peak near the beginning", () => {
    const n = 10 ** 7;
    const peak = 100; // Peak at index 99
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });

  it("should handle a large mountain array with peak near the end", () => {
    const n = 10 ** 7;
    const peak = n - 100; // Peak at index n - 101
    const increasing = Array.from({ length: peak }, (_, i) => i);
    const decreasing = Array.from({ length: n - peak }, (_, i) => peak - i - 1);
    const arr = increasing.concat([peak]).concat(decreasing);
    expect(arr.length).toBe(n + 1);
    expect(mountainPeak(arr)).toBe(peak);
  });
});
