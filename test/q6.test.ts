import { countingBits } from "../src/q6";

describe("countingBits", () => {
  it("should return [0] when n = 0", () => {
    const result = countingBits(0);
    expect(result).toEqual([0]);
  });

  it("should return [0, 1] when n = 1", () => {
    const result = countingBits(1);
    expect(result).toEqual([0, 1]);
  });

  it("should return [0, 1, 1] when n = 2", () => {
    const result = countingBits(2);
    expect(result).toEqual([0, 1, 1]);
  });

  it("should return [0, 1, 1, 2, 1, 2] when n = 5", () => {
    const result = countingBits(5);
    expect(result).toEqual([0, 1, 1, 2, 1, 2]);
  });

  it("should return correct counts for n = 10", () => {
    const result = countingBits(10);
    expect(result).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
  });

  it("should handle large n values", () => {
    const result = countingBits(20);
    expect(result).toEqual([
      0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2,
    ]);
  });

  it("should return an array of length n + 1", () => {
    const n = 15;
    const result = countingBits(n);
    expect(result.length).toBe(n + 1);
  });

  it("should correctly count the number of ones in binary representations", () => {
    const n = 7;
    const expected = [0, 1, 1, 2, 1, 2, 2, 3];
    const result = countingBits(n);
    expect(result).toEqual(expected);
  });

  it("should handle n = 0 correctly", () => {
    const result = countingBits(0);
    expect(result).toEqual([0]);
  });

  it("should handle n = 100 correctly", () => {
    const n = 100;
    const result = countingBits(n);
    expect(result[100]).toBe(3); // 100 in binary is 1100100, which has 3 ones
  });

  it("should correctly compute counts for power of two numbers", () => {
    const n = 16;
    const result = countingBits(n);
    // For power of two numbers, the count of ones is 1
    expect(result[1]).toBe(1); // 2^0
    expect(result[2]).toBe(1); // 2^1
    expect(result[4]).toBe(1); // 2^2
    expect(result[8]).toBe(1); // 2^3
    expect(result[16]).toBe(1); // 2^4
  });

  it("should handle n = 100,000 correctly", () => {
    const n = 100000;
    const result = countingBits(n);
    expect(result.length).toBe(n + 1);
    // Spot-checking some values
    expect(result[100000]).toBe(6); // Binary of 100000 is 11000011010100000, which has 6 ones
  });

  it("should handle n = 1,000,000 correctly", () => {
    const n = 1000000;
    const result = countingBits(n);
    expect(result.length).toBe(n + 1);
    // Spot-checking some values
    expect(result[1000000]).toBe(7); // Binary of 1000000 is 11110100001001000000, which has 7 ones
  });

  it("should handle n = 10,000,000 correctly", () => {
    const n = 10000000;
    const result = countingBits(n);
    expect(result.length).toBe(n + 1);
    // Spot-checking some values
    expect(result[10000000]).toBe(8); // Binary of 10000000 is 100110001001011010000000, which has 8 ones
  });
});
