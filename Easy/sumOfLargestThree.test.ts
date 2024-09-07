import { sumOfLargestThree } from "./sumOfLargestThree";

test("should return sum of largest three numbers", () => {
  expect(sumOfLargestThree([10, 5, 3, 2, 8])).toBe(23);
  expect(sumOfLargestThree([5, 5])).toBe(10);
  expect(sumOfLargestThree([5, 5, 5, 5, 5])).toBe(15);
  expect(sumOfLargestThree([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toBe(15);
  expect(sumOfLargestThree([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toBe(15);
});

test("should return the sem of all numbers if the length of the array is less than 4", () => {
  expect(sumOfLargestThree([10, 5, 3])).toBe(18);
  expect(sumOfLargestThree([10, 5])).toBe(15);
  expect(sumOfLargestThree([10])).toBe(10);
  expect(sumOfLargestThree([])).toBe(0);
});
