import type { IAuthStore } from '~/stores/auth/types';

export const useAuthStore = defineStore('user', {
  state: (): IAuthStore => ({
    test: 'ss',
  }),
  actions: {
    async fetchToken() {
      const api = useApi();
      const storage = useLocalStorage();

      try {
        const token = storage.getToken();
        if (!token) return;

        const res = await api<{ token: string }>('/login', {
          method: 'POST',
          body: getCredentialsToCatalog(),
        });
        console.log('res', res);
        storage.setToken(res.token);
        return res;
      } catch (e) {
        console.error('error', e);
        storage.removeLocalStorage('JWT');
      }
    },
  },
});
