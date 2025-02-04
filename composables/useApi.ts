import { getApiCatalog } from '~/utils/base';
import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack';

export function useApi() {
  const baseURL = getApiCatalog();

  const apiFetch = async <T>(endpoint: string, options: NitroFetchOptions<NitroFetchRequest> = {}): Promise<T> => {
    // const storage = useLocalStorage();
    // const token = storage.getToken();

    options.headers = {
      ...options.headers,
      // ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    console.log('options', options);

    try {
      // Make the API request using $fetch
      const response = await $fetch<T>(`${baseURL}${endpoint}`, options);
      return response;
    } catch (error: any) {
      console.error('API Error:', error);
      // storage.removeLocalStorage('JWT');

      if (error.response?.status === 401) {
        console.error('Unauthorized! Redirecting to login...');
        // authStore.logout();
      }

      throw new Error(error.response?.data?.message || 'An error occurred while fetching data');
    }
  };

  return apiFetch;
}
