import axios from "axios";

export async function fetchUser(): Promise<void> {
  try {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    if (response.status !== 200) {
      throw new Error("Failed to fetch users");
    }
    const users = response.data;

    users.forEach((user: any) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error(error);
  }
}
