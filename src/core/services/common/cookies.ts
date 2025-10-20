import  Cookies  from 'js-cookie';

export const getAccessToken = () => Cookies.get("accessToken");
export const setAccessToken = (token: string) =>
  Cookies.set("accessToken", token, { path: "/", secure: true, sameSite: "strict" });

export const getRefreshToken = () => Cookies.get("refreshToken");
export const setRefreshToken = (token: string) =>
  Cookies.set("refreshToken", token, { path: "/", secure: true, sameSite: "strict" });

export const clearAuthCookies = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
