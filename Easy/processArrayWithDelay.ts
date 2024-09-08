function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function processArrayWithDelay(numbers: number[]): Promise<void> {
  for (const num of numbers) {
    await delay(1000);
    console.log(num);
    // Write your code here
  }
}
