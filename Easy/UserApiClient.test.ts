import { fetchUser } from "./UserApiClient";

test("should fetch users", async () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation();
  await fetchUser();
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("ID"));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Name"));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Email"));

  consoleSpy.mockRestore();
});
