/**
 * Simple JWT token generation and validation for demo purposes.
 * In production, use a proper JWT library (jsonwebtoken, jose, etc.)
 */

const SECRET_KEY = "7AJnlnq3aySIieqTbauVz9Ak4xNsSpUh8Px9yFI-Qx9-dOuIoIbBccNUieKXK0tvrC7qLXHfudf-HuZSQnc8ag==";

interface TokenPayload {
  userId: number;
  username: string;
  email: string;
  iat: number;
  exp: number;
}

/**
 * Simple base64 encoding (for demo only, not secure for production)
 */
function base64Encode(str: string): string {
  return btoa(str);
}

/**
 * Simple base64 decoding (for demo only, not secure for production)
 */
function base64Decode(str: string): string {
  return atob(str);
}

/**
 * Generate a mock JWT token (demo purposes only)
 * In production, tokens should be generated on the server
 */
export function generateAccessToken(
  userId: number,
  username: string,
  email: string,
  expiresIn: number = 3600 // 1 hour in seconds
): string {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiresIn;

  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload: TokenPayload = {
    userId,
    username,
    email,
    iat,
    exp,
  };

  // Create the token (simplified, not cryptographically secure)
  const encodedHeader = base64Encode(JSON.stringify(header));
  const encodedPayload = base64Encode(JSON.stringify(payload));
  const signature = base64Encode(
    `${encodedHeader}.${encodedPayload}.${SECRET_KEY}`
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Generate a refresh token (typically longer-lived than access token)
 */
export function generateRefreshToken(
  userId: number,
  username: string,
  email: string,
  expiresIn: number = 604800 // 7 days in seconds
): string {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiresIn;

  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload: TokenPayload = {
    userId,
    username,
    email,
    iat,
    exp,
  };

  const encodedHeader = base64Encode(JSON.stringify(header));
  const encodedPayload = base64Encode(JSON.stringify(payload));
  const signature = base64Encode(
    `${encodedHeader}.${encodedPayload}.${SECRET_KEY}`
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

/**
 * Validate and decode a JWT token
 */
export function validateToken(token: string): TokenPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const payload = JSON.parse(base64Decode(parts[1])) as TokenPayload;
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if token is expired
    if (payload.exp < currentTime) {
      return null; // Token expired
    }

    return payload;
  } catch (error) {
    console.error("Token validation error:", error);
    return null;
  }
}

/**
 * Check if a token is still valid
 */
export function isTokenValid(token: string): boolean {
  return validateToken(token) !== null;
}

/**
 * Extract user info from a valid token
 */
export function getUserFromToken(token: string): TokenPayload | null {
  return validateToken(token);
}

/**
 * Get remaining time until token expires (in seconds)
 */
export function getTokenExpiresIn(token: string): number | null {
  const payload = validateToken(token);
  if (!payload) return null;

  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp - currentTime;
}
