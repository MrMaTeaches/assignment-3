import { bunnyEars2 } from "../src/q1";

describe("bunnyEars2", () => {
  it("should return 0 when n is 0", () => {
    expect(bunnyEars2(0)).toBe(0);
  });

  it("should return 2 when n is 1", () => {
    expect(bunnyEars2(1)).toBe(2);
  });

  it("should return 5 when n is 2", () => {
    expect(bunnyEars2(2)).toBe(5);
  });

  it("should return 7 when n is 3", () => {
    expect(bunnyEars2(3)).toBe(7);
  });

  it("should return 10 when n is 4", () => {
    expect(bunnyEars2(4)).toBe(10);
  });

  it("should return 12 when n is 5", () => {
    expect(bunnyEars2(5)).toBe(12);
  });

  it("should return 25 when n is 10", () => {
    expect(bunnyEars2(10)).toBe(25);
  });

  it("should handle large numbers correctly", () => {
    expect(bunnyEars2(50)).toBe(125);
  });
});
