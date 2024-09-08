// tests/index.test.ts

import { processArrayWithDelay } from "./processArrayWithDelay";

test("should process each number with 1 second delay", async () => {
  const consoleSpy = jest.spyOn(console, "log"); // console.log'u gözlemleyelim
  await processArrayWithDelay([1, 2, 3]);

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith(2);
  expect(consoleSpy).toHaveBeenCalledWith(3);

  consoleSpy.mockRestore(); // console.log'u eski haline getir
});
