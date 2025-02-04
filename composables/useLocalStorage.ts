export const useLocalStorage = () => ({
  removeLocalStorage(key: string) {
    console.log('localStorage', localStorage);
    localStorage.removeItem(key);
  },

  setToken(token: string) {
    console.log('localStorage', localStorage);
    localStorage.setItem("JWT", JSON.stringify({token}));
  },

  getToken() {
    console.log('localStorage', localStorage);
    const valueString = localStorage.getItem("JWT");
    if (valueString) {
      const value = JSON.parse(valueString);
      return value.token;
    }
    return '';
  }
});
