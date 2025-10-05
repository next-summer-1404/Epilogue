'use client'; 

export const setItem = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return; // اطمینان از اجرای کلاینت
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  if (typeof window === 'undefined') return false;
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : false;
};

export const setItemGeneric = (key: string, value: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value);
};

export const getItemGeneric = (key: string) => {
  if (typeof window === 'undefined') return false;
  const item = localStorage.getItem(key);
  return item ?? false;
};

export const removeItem = (key: string) => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  if (typeof window === 'undefined') return;
  localStorage.clear();
};
