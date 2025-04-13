import { getApiCatalog } from '~/utils/base';
import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack';

export function useApi() {
  const baseURL = getApiCatalog();

  const apiFetch = async <T>(endpoint: string, options: NitroFetchOptions<NitroFetchRequest> = {}): Promise<T> => {
    // const storage = useLocalStorage();
    const cookie = useCookie(JWT_COOKIE);
    const token = cookie.value;

    options.headers = {
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    try {
      // Make the API request using $fetch
      const response = await $fetch<T>(`${baseURL}${endpoint}`, options);
      console.log('baseURL', baseURL);
      return response;
    } catch (error: any) {
      console.dir(error);
      // storage.removeLocalStorage('JWT');

      if (error?.status === 401) {
        console.error('Unauthorized! Redirecting to login...');
        // authStore.logout();
      }

      throw error;
    }
  };

  return apiFetch;
}
