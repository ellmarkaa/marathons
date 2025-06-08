import type { IDictionaryResponse } from '~/utils/types';
import type { TagType } from '~/components/main/types';
import type { IFAQ, IMarathon, IMarathonState, IPrice, IReview, ISuccessBuyRequest } from "~/stores/marathon/types";

export const useMarathonStore = defineStore('marathon', {
  state: (): IMarathonState => ({
    sliderMarathons: [],
    mainPageMarathons: [],
    mainLoading: false,
    sliderLoading: false,
    priceToBuy: null,
    marathon: null,
    marathonPagination: {
      perPage: 9,
      total: 0,
      page: 1,
      lastPage: 1,
    },
  }),
  actions: {
    async fetchSliderMarathons() {
      const api = useApi();
      try {
        this.sliderLoading = true;
        const res = await api<IDictionaryResponse<ISliderMarathon>>('dictionary/Слайдеры', {
          method: 'GET',
        });
        const sliders = res.items.data.sort((a, b) => a.order - b.order);
        this.sliderMarathons = sliders;
        this.sliderLoading = false;
        return sliders;
      } catch (e) {
        this.sliderLoading = false;
        console.error('error', e);
      }
    },

    async fetchMoreMarathons() {
      const api = useApi();
      try {
        this.mainLoading = true;
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны`, {
          params: {
            perpage: this.marathonPagination.perPage,
            page: this.marathonPagination.page + 1,
          },
          method: 'GET',
        });
        this.marathonPagination = {
          page: res.items.current_page,
          lastPage: res.items.last_page,
          perPage: res.items.per_page,
          total: res.items.total,
        };
        this.mainPageMarathons = this.mainPageMarathons.concat(res.items.data);
        this.mainLoading = false;
        return res.items.data;
      } catch (e) {
        this.mainLoading = false;
        console.error('error', e);
      }
    },

    async fetchMarathonsWithParams(filterParams: TagType[]) {
      const api = useApi();
      try {
        this.mainLoading = true;

        const searchParam = new URLSearchParams();
        filterParams.forEach(filter => {
          if (filter.param === 'distance') {
            searchParam.append('dict_arr[]', `distances:${filter.value}`);
          } else if (filter.param === 'year') {
            searchParam.append('dict_arr[]', `marathon_date:${filter.value}`);
          }
        });
        searchParam.append('perpage', this.marathonPagination.perPage.toString());
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны?${searchParam.toString()}`, {
          method: 'GET',
        });
        this.marathonPagination = {
          page: res.items.current_page,
          lastPage: res.items.last_page,
          perPage: res.items.per_page,
          total: res.items.total,
        };
        this.mainPageMarathons = res.items.data;
        this.mainLoading = false;
        return res.items.data;
      } catch (e) {
        this.mainLoading = false;
        console.error('error', e);
      }
    },

    async fetchMarathons() {
      const api = useApi();
      try {
        this.mainLoading = true;
        const date = new Date();
        date.setMonth(2);
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны`, {
          params: {
            perpage: this.marathonPagination.perPage,
            page: this.marathonPagination.page,
            // 'dict_arr[]': 'distances:100',
            // 'marathon_date': date.toISOString(),
            // 'dict_arr[]': `marathon_date:${date.toISOString()}`
            // 'filter_date[]': 'start=2025-10-01.end=2025-01-09'
          },
          method: 'GET',
        });
        this.marathonPagination = {
          page: res.items.current_page,
          lastPage: res.items.last_page,
          perPage: res.items.per_page,
          total: res.items.total,
        };
        this.mainPageMarathons = res.items.data;
        this.mainLoading = false;
        return res.items.data;
      } catch (e) {
        this.mainLoading = false;
        console.error('error', e);
      }
    },

    async fetchMarathonById(marathonId: string | number) {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны/?id=${marathonId}`, {
          method: 'GET',
        });
        this.marathon = res.items.data[0] || null
        return res.items.data[0];
      } catch (e) {
        console.error('error', e);
      }
    },

    async fetchPrices(marathonId: string | number) {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IPrice>>(`dictionary/Прайс%20(Каталог)`, {
          method: 'GET',
          params: {
            'dict_arr[]': `marathon.id:${marathonId}`,
          },
        });
        return res.items.data;
      } catch (e) {
        console.error('error', e);
      }
    },

    async fetchReviews(marathonId: string | number) {
      const api = useApi();
      const searchParam = new URLSearchParams();
      searchParam.append('dict_arr[]', `marathon.id:${marathonId}`);
      searchParam.append('dict_arr[]', `status.key:completed`);
      try {
        const res = await api<IDictionaryResponse<IReview>>(`dictionary/Отзывы%20марафонов?${searchParam.toString()}`, {
          method: 'GET',
        });
        return res.items.data;
      } catch (e) {
        console.error('error', e);
      }
    },

    async fetchFAQ(marathonId: string | number) {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IFAQ>>(`dictionary/FAQ`, {
          method: 'GET',
          params: {
            'dict_arr[]': `marathon.id:${marathonId}`,
          },
        });
        return res.items.data;
      } catch (e) {
        console.error('error', e);
      }
    },

    async createReview(title: string, marathonId: number) {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IReview>>(`dictionary/Отзывы%20марафонов`, {
          method: 'POST',
          body: {
            value: title,
            marathon: marathonId
          }
        });
        return res.items.data;
      } catch (e) {
        console.error('error', e);
      }
    },

    async buyMarathon(price: IPrice) {
      const api = useApi();
      const marathon = price.marathon
      const totalPrice = () => {
        if (price) {
          return (price?.hotel_number?.price || 0) + (price.visa?.service?.price || 0) + (price.visa?.consular_fees?.price || 0);
        }
        return 0;
      }

      try {
        const res = await api<ISuccessBuyRequest>(`509c39ae-f0ce-4cad-aee8-d526bf89c4fb/pay/onevision`, {
          method: 'POST',
          body: {
            amount: totalPrice(),
            provider: "onevision",
            comment: `${marathon.title_ru} - ${marathon.country.name_ru}`,
            name: marathon.title_ru,
            success: `${window.location.origin}/marathon/${marathon.id}?payment=success`,
            failure: `${window.location.origin}/marathon/${marathon.id}?payment=error`
          }
        });
        return res;
      } catch (e) {
        console.error('error', e);
      }
    }

  },

});
