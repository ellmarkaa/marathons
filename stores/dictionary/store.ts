import type {
  IBloodType,
  ICitizenship,
  ICreateConsultation,
  IDictionaryState,
  IUserAgreement,
} from '~/stores/dictionary/types';
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
    userAgreement: null,
    consultationLoading: false,
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

    async fetchUserAgreement() {
      const api = useApi();
      try {
        this.dictionaryLoading = true;

        const res = await api<IDictionaryResponse<IUserAgreement>>('dictionary/Пользовательское соглашение/', {
          method: 'GET',
        });

        this.dictionaryLoading = false;
        this.userAgreement = res.items.data[0] || null;
        return res.items.data[0] || null;
      } catch (e: any) {
        this.dictionaryLoading = false;
        this.error = e.message;
        console.error('error', e);
      }
    },

    async sendConsultation(consultation: ICreateConsultation) {
      const api = useApi();
      const toast = useToast();

      try {
        this.consultationLoading = true;

        const response = await api<unknown>('webhook/cms/form', {
          method: 'POST',
          body: consultation,
        });
        toast.add({
          title: 'Спасибо! В ближайшее время мы с вами свяжемся',
        });

        this.consultationLoading = false;
        return response;
      } catch (e: any) {
        this.consultationLoading = false;
        console.error('error', e);
        toast.add({
          title: 'Ошибка',
          description: e.message,
          color: 'error',
        });
      }
    },
  },
});
