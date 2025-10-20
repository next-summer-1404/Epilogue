// lib/auth/auth.services.ts
import axios from "axios";
import { setAccessToken, getRefreshToken } from "./cookies";

export const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`,
      { token: refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );

    const newAccessToken = response.data?.accessToken;
    if (newAccessToken) {
      setAccessToken(newAccessToken);
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false;
  }
};
