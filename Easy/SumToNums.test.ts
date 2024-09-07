// tests/index.test.ts
import { sum } from "./SumToNums"; // Import the sum function

// Define test cases
test("should return correct sum for positive numbers", () => {
  expect(sum(1, 2)).toBe(3); // Test case 1
  expect(sum(10, 20)).toBe(30); // Test case 2
});

test("should return correct sum for negative and positive numbers", () => {
  expect(sum(-1, 1)).toBe(0); // Test case 3
});

test("should return correct sum for negative numbers", () => {
  expect(sum(-5, -5)).toBe(-10); // Test case 4
});
