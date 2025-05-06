import type { IMarathonState, ISliderMarathon } from '~/stores/marathon/types';
import type { IDictionaryResponse } from '~/utils/types';

export const useMarathonStore = defineStore('marathon', {
  state: (): IMarathonState => ({
    sliderMarathons: [],
    mainPageMarathons: [],
    mainLoading: false,
    sliderLoading: false,
    marathonPagination: {
      perPage: 3,
      total: 0,
      page: 1,
      lastPage: 1
    }
  }),
  actions: {
    async fetchSliderMarathons() {
      const api = useApi();
      try {
        this.sliderLoading = true;
        const res = await api<IDictionaryResponse<ISliderMarathon>>('dictionary/Слайдеры', {
          method: 'GET',
        });
        // const promises = res.items.data.map(slider => {
        //   console.log('slider.pictures[0]', slider.pictures[0]);
        //   if (slider.pictures[0]) {
        //     return api(slider.pictures[0].path.replace('task/', ''), { method: 'GET' });
        //   }
        // });
        // const pictures = await Promise.all(promises);
        // console.log('pictures', pictures);
        const sliders = res.items.data.sort((a, b) => a.order - b.order)
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
            page: this.marathonPagination.page + 1
          },
          method: 'GET',
        });
        this.marathonPagination = {
          page: res.items.current_page,
          lastPage: res.items.last_page,
          perPage: res.items.per_page,
          total: res.items.total
        }
        this.mainPageMarathons = this.mainPageMarathons.concat(res.items.data)
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
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны`, {
          params: {
            perpage: this.marathonPagination.perPage,
            page: this.marathonPagination.page
          },
          method: 'GET',
        });
        console.log('res', res);
        this.marathonPagination = {
          page: res.items.current_page,
          lastPage: res.items.last_page,
          perPage: res.items.per_page,
          total: res.items.total
        }
        this.mainPageMarathons = res.items.data
        this.mainLoading = false;
        return res.items.data;
      } catch (e) {
        this.mainLoading = false;
        console.error('error', e);
      }
    },

    async fetchMarathonById(marathonId: number) {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IMarathon>>(`dictionary/Марафоны/${marathonId}`, {
          method: 'GET',
        });
        console.log('fetchMarathon', res);
        return res.items.data;
      } catch (e) {
        console.error('error', e);
      }
    },
  },
});
