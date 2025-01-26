export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  } else {
    return value;
  }
}

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
