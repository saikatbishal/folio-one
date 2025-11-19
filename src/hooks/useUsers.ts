import { useMemo } from "react";
import usersData from "../../public/db/users.json";

interface User {
  username: string;
  image: string;
  // Add other user properties as needed
}

export const useUsers = () => {
  // Memoize the users array to prevent re-parsing on every render
  const users = useMemo(() => usersData.users as User[], []);

  // Memoize user lookup function
  const findUserByUsername = useMemo(
    () => (username?: string) => {
      if (!username) return undefined;
      return users.find((u) => u.username === username);
    },
    [users]
  );

  return { users, findUserByUsername };
};
