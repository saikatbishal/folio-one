import { createContext, useState, useEffect, type ReactNode } from "react";
import { generateAccessToken, validateToken, isTokenValid } from "../lib/auth";

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
  // login now returns an object with success and optional message
  login: (
    username: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
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
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      // Get API URL from environment variable (localhost in dev, production URL in prod)
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const resp = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // include credentials so httpOnly cookie set by server is stored by the browser
        credentials: "include",
        body: JSON.stringify({ email: username, password }),
      });

      if (!resp.ok) {
        // Try to read server message
        let msg = `Login failed: ${resp.status}`;
        try {
          const errData = await resp.json();
          if (errData && errData.message) msg = errData.message;
        } catch {
          /* ignore json parse errors */
        }
        return { success: false, message: msg };
      }

      const data = await resp.json();

      // Backend sets an httpOnly cookie with the JWT and returns user info in the body.
      // Accept response shapes like: { _id, username, usertype } or { user }
      const returnedUser = data.user || data.profile || data || null;

      if (!returnedUser || (!returnedUser._id && !returnedUser.id)) {
        return { success: false, message: "Invalid server response" };
      }

      // Normalize user shape
      const normalizedUser = {
        id: returnedUser._id || returnedUser.id,
        username:
          returnedUser.username ||
          returnedUser.name ||
          returnedUser.email ||
          String(returnedUser._id || returnedUser.id),
        email: returnedUser.email || "",
      };

      // Store only the user on the client side; the auth token is stored as an httpOnly cookie by the server
      localStorage.setItem("user", JSON.stringify(normalizedUser));
      sessionStorage.setItem("user", JSON.stringify(normalizedUser));

      // Clear any client-side tokens (not used with httpOnly cookie approach)
      setAccessToken(null);
      setRefreshToken(null);

      // Update state
      setUser(normalizedUser);
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      const errObj = error as unknown as { message?: unknown };
      const message =
        errObj && typeof errObj.message === "string"
          ? errObj.message
          : String(error);
      return { success: false, message };
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
