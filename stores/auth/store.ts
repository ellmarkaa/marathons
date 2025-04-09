import type { IAuthStore, IUser, VerifyParams, IOtpResponse, IUserOptions } from '~/stores/auth/types';

import { JWT_COOKIE } from '~/utils/const';
import type { RegisterFormType } from '~/components/register/helper';

export const useAuthStore = defineStore('user', {
  state: (): IAuthStore => ({
    otpLoading: false,
    verifyError: null,
    token: null,
    user: null,
    userUpdateLoading: false,
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

    async registerUser(userInfo: RegisterFormType) {
      const api = useApi();
      const toast = useToast();

      try {
        this.userUpdateLoading = true;
        if (!this.user) throw new Error('no user');

        const response = await api<IUser>('contact', {
          method: 'POST',
          body: {
            ...this.user,
            options: {
              ...userInfo,
              is_registered: true,
            },
          },
        });

        this.userUpdateLoading = false;
        toast.add({
          title: 'Аккаунт успешно зарегистрирован',
          color: 'info',
        });
        return response;
      } catch (e: any) {
        this.userUpdateLoading = false;
        console.error('error', e);
        toast.add({
          title: 'Ошибка',
          description: e.message,
          color: 'error',
        });
      }
    },

    async updateUser(userInfo: Partial<IUserOptions>) {
      console.log('userInfo', userInfo);
      const api = useApi();
      const toast = useToast();

      try {
        this.userUpdateLoading = true;
        if (!this.user) throw new Error('no user');

        const response = await api<IUser>('contact', {
          method: 'POST',
          body: {
            ...this.user,
            options: {
              ...userInfo,
            },
          },
        });

        this.userUpdateLoading = false;
        toast.add({
          title: 'Данные успешно обновлены',
          color: 'info',
        });
        return response;
      } catch (e: any) {
        this.userUpdateLoading = false;
        console.error('error', e);
        toast.add({
          title: 'Ошибка',
          description: e.message,
          color: 'error',
        });
      }
    },

    async initUserFetch() {
      const api = useApi();
      const cookie = useCookie(JWT_COOKIE);
      if (!cookie.value) return null;

      try {
        const userRes = await api<IUser>('contact/info', {
          method: 'GET',
        });
        console.log('userRes', userRes);
        this.user = userRes;
        return userRes;
      } catch (e: any) {
        console.error(e);
        cookie.value = null;
      }
    },
  },
});
