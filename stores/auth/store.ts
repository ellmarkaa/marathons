import type { IAuthStore } from '~/stores/auth/types';
import type {IOtpResponse} from "~/stores/marathon/types";

export const useAuthStore = defineStore('user', {
  state: (): IAuthStore => ({
    otpLoading: false,
  }),
  actions: {
    async fetchToken() {
      const api = useApi();
      const storage = useLocalStorage();

      try {
        const token = storage.getToken();
        if (!token) return;

        const res = await api<{ token: string }>('login', {
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

    async otp(email: string) {
      const api = useApi();
      const toast = useToast();

      try {
        this.otpLoading = true;
        const res = await api<IOtpResponse>('otp', {
          method: 'POST',
          body: {
            email
          }
        });
        this.otpLoading = false
        return res.status;
      } catch (e: any) {
        this.otpLoading = false;
        console.error('error', e);
        toast.add({
          title: 'Ошибка',
          description: e.message,
          color: 'error'
        });
      }
    }
  },
});
