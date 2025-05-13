import type { IBloodType, ICitizenship, IDictionaryState } from '~/stores/dictionary/types';
import type { IDictionaryResponse } from '~/utils/types';
import type { IDistance } from '~/stores/marathon/types';

export const useDictionaryStore = defineStore('dictionary', {
  state: (): IDictionaryState => ({
    bloodTypes: [],
    dictionaryLoading: false,
    error: null,
    citizenshipList: [],
    countryList: [],
    distances: [],
  }),
  actions: {
    async fetchBloodTypes() {
      const api = useApi();
      try {
        this.dictionaryLoading = true;

        const res = await api<IDictionaryResponse<IBloodType>>('dictionary/Группы крови', {
          method: 'GET',
        });

        this.dictionaryLoading = false;
        this.bloodTypes = res.items.data;
        return res.items.data;
      } catch (e: any) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },

    async fetchCitizenship() {
      const api = useApi();
      try {
        this.dictionaryLoading = true;

        const res = await api<IDictionaryResponse<ICitizenship>>('dictionary/Гражданства', {
          method: 'GET',
        });

        this.dictionaryLoading = false;
        this.citizenshipList = res.items.data;
        return res.items.data;
      } catch (e: any) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },

    async fetchCountries() {
      const api = useApi();
      try {
        this.dictionaryLoading = true;

        const res = await api<IDictionaryResponse<ICountry>>('dictionary/Страны', {
          method: 'GET',
        });

        this.dictionaryLoading = false;
        this.countryList = res.items.data;
        return res.items.data;
      } catch (e: any) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },

    async fetchDistances() {
      const api = useApi();
      try {
        this.dictionaryLoading = true;

        const res = await api<IDictionaryResponse<IDistance>>('dictionary/Дистанции', {
          method: 'GET',
        });

        this.dictionaryLoading = false;
        this.distances = res.items.data;
        return res.items.data;
      } catch (e: any) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },
  },
});
