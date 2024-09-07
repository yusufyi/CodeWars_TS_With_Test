//This is My Solution
export function sumOfLargestThree(numbers: number[]): number {
  if (numbers.length < 4) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  } else {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    return sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2];
  }
}
