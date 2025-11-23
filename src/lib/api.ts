const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "https://folio-one-backend-saikatbishals-projects.vercel.app/api";

export const api = async (endpoint: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include", // Important for cookies
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Something went wrong");
  }

  return res.json();
};
