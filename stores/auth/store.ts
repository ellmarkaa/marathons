import type { IAuthStore, IUser, VerifyParams, IOtpResponse } from '~/stores/auth/types';

import { JWT_COOKIE } from '~/utils/const';

export const useAuthStore = defineStore('user', {
  state: (): IAuthStore => ({
    otpLoading: false,
    verifyError: null,
    token: null,
    user: null,
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
            email,
          },
        });
        this.otpLoading = false;
        return res.status;
      } catch (e: any) {
        this.otpLoading = false;
        console.error('error', e);
        toast.add({
          title: 'Ошибка',
          description: e.message,
          color: 'error',
        });
      }
    },

    async verify(params: VerifyParams) {
      const api = useApi();
      const toast = useToast();
      const tokenCookie = useCookie(JWT_COOKIE);

      try {
        this.otpLoading = true;
        const token = await api<string>('login', {
          method: 'POST',
          body: params,
        });

        tokenCookie.value = token;

        const userRes = await api<IUser>('contact/info', {
          method: 'GET',
        });

        this.user = userRes;
        this.verifyError = null;
        this.otpLoading = false;
        return userRes;
      } catch (e: any) {
        console.dir(e);
        this.otpLoading = false;
        if (e.status === 400) {
          this.verifyError = 'Неверный код, попробуйте еще раз';
          toast.add({
            title: 'Ошибка',
            description: 'Неверный код',
            color: 'error',
          });
        }
      }
    },
  },
});
