import { createContext, useState, useEffect, type ReactNode } from "react";
import {
  generateAccessToken,
  generateRefreshToken,
  validateToken,
  isTokenValid,
} from "../lib/auth";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshAccessToken: () => Promise<boolean>;
  isTokenExpired: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
export type { AuthContextType };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sync auth state from storage
  const syncAuthState = () => {
    const storedAccessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");
    const storedRefreshToken =
      localStorage.getItem("refreshToken") ||
      sessionStorage.getItem("refreshToken");
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");
    if (storedAccessToken && isTokenValid(storedAccessToken) && storedUser) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      setAccessToken(null);
      setRefreshToken(null);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    syncAuthState();
    // Listen for storage changes (cross-tab)
    const handleStorage = (e: StorageEvent) => {
      if (e.key && ["accessToken", "refreshToken", "user"].includes(e.key)) {
        syncAuthState();
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      // Fetch users from the dummy database
      const response = await fetch("/db/users.json");
      const data = await response.json();

      // Find user by username and password
      const foundUser = data.users.find(
        (u: {
          username: string;
          password: string;
          id: number;
          email: string;
        }) => u.username === username && u.password === password
      );

      if (!foundUser) {
        console.error("Invalid username or password");
        return false;
      }

      // Generate tokens
      const newAccessToken = generateAccessToken(
        foundUser.id,
        foundUser.username,
        foundUser.email,
        3600 // 1 hour
      );
      const newRefreshToken = generateRefreshToken(
        foundUser.id,
        foundUser.username,
        foundUser.email,
        604800 // 7 days
      );

      // Store tokens and user in both localStorage and sessionStorage
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
        })
      );
      sessionStorage.setItem("accessToken", newAccessToken);
      sessionStorage.setItem("refreshToken", newRefreshToken);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
        })
      );

      // Update state
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      setUser({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      });
      setIsAuthenticated(true);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshAccessToken = async (): Promise<boolean> => {
    if (!refreshToken) return false;

    try {
      const payload = validateToken(refreshToken);
      if (!payload) {
        logout();
        return false;
      }

      // Generate new access token
      const newAccessToken = generateAccessToken(
        payload.userId,
        payload.username,
        payload.email,
        3600 // 1 hour
      );

      localStorage.setItem("accessToken", newAccessToken);
      sessionStorage.setItem("accessToken", newAccessToken);
      setAccessToken(newAccessToken);

      return true;
    } catch (error) {
      console.error("Token refresh error:", error);
      logout();
      return false;
    }
  };

  const isTokenExpired = (): boolean => {
    if (!accessToken) return true;
    return !isTokenValid(accessToken);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        accessToken,
        refreshToken,
        login,
        logout,
        refreshAccessToken,
        isTokenExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
