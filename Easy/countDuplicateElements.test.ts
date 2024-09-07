import { countDuplicateElements } from "./countDuplicateElements";

test("should return the correct count of duplicate elements", () => {
  expect(countDuplicateElements([1, 2, 3, 4, 5, 1, 2, 6])).toBe(2); // 1 ve 2 tekrar ediyor
  expect(countDuplicateElements([10, 10, 10, 10])).toBe(1); // 10 tekrar ediyor
  expect(countDuplicateElements([1, 2, 3, 4])).toBe(0); // Tekrar yok
  expect(countDuplicateElements([5, 5, 5, 5, 5, 5])).toBe(1); // 5 tekrar ediyor
});
