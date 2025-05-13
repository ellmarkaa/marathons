import type { IMarathonState, ISliderMarathon } from '~/stores/marathon/types';
import type { IDictionaryResponse } from '~/utils/types';
import type { TagType } from '~/components/main/types';

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
        // const promises = res.items.data.map(slider => {
        //   console.log('slider.pictures[0]', slider.pictures[0]);
        //   if (slider.pictures[0]) {
        //     return api(slider.pictures[0].path.replace('task/', ''), { method: 'GET' });
        //   }
        // });
        // const pictures = await Promise.all(promises);
        // console.log('pictures', pictures);
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
      console.log('num');
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
        searchParam.append('perpage', '20');
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
        console.log('date.toDateString()', date.toDateString());
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
        console.log('res', res);
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
