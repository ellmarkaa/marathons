import {removeLocalStorage, setLocalStorage} from "~/utils/localStorage";

export const useAuthStore = defineStore('user', {
  state: () => ({
    test: 'ss'
  }),
  actions: {
    async getToken() {
      const api = useApi();
      try {
        const res = await api<{token: string}>('/login', {
          method: 'POST',
          body: getCredentialsToCatalog()
        })
        console.log('res', res)
        setLocalStorage('JWT', res.token);
        return res;
      } catch (e) {
        console.error('error', e);
        removeLocalStorage('JWT');
      }
    }
  }
});
