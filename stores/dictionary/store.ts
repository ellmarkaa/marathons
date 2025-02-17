import type { IBloodType, ICitizenship, IDictionaryState } from '~/stores/dictionary/types';
import type { IDictionaryResponse } from '~/utils/types';

export const useDictionaryStore = defineStore('dictionary', {
  state: (): IDictionaryState => ({
    bloodTypes: [],
    dictionaryLoading: false,
    error: null,
    citizenshipList: [],
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
        this.bloodTypes = res.items;
        return res.items;
      } catch (e) {
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
        this.citizenshipList = res.items;
        return res.items;
      } catch (e) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },
  },
});
