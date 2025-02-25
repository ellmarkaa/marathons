export const useLocalStorage = () => ({
  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  },

  setToken(token: string) {
    localStorage.setItem('JWT', JSON.stringify({ token }));
  },

  getToken() {
    const valueString = localStorage.getItem('JWT');
    if (valueString) {
      const value = JSON.parse(valueString);
      return value.token;
    }
    return '';
  },
});
