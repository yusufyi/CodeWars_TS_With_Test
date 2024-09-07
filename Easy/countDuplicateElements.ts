export function countDuplicateElements(numbers: number[]): number {
  const elementCount: { [key: number]: number } = {};
  let duplicateCount = 0;

  // Elemanları saymak için döngü
  for (const num of numbers) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }

  // Tekrar eden elemanları saymak için döngü
  for (const count of Object.values(elementCount)) {
    if (count > 1) {
      duplicateCount++;
    }
  }
  console.log(duplicateCount);
  return duplicateCount;
}

countDuplicateElements([1, 2, 3, 4, 5, 1, 2, 6]); // 2 (1 ve 2 tekrar ediyor)
countDuplicateElements([10, 10, 10, 10]); // 1 (10 sadece bir kez sayılır, ama tekrar ediyor)
countDuplicateElements([1, 2, 3, 4]); // 0 (hiçbir tekrar yok)
countDuplicateElements([5, 5, 5, 5, 5, 5]); // 1 (5 tekrar ediyor)
