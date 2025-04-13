import type { IMarathonState, ISliderMarathon } from '~/stores/marathon/types';
import type { IDictionaryResponse } from '~/utils/types';

export const useMarathonStore = defineStore('marathon', {
  state: (): IMarathonState => ({
    sliderMarathons: [],
    mainPageMarathons: [],
    mainLoading: false,
    sliderLoading: false,
  }),
  actions: {
    async fetchSliderMarathons() {
      const api = useApi();
      try {
        this.sliderLoading = true;
        const res = await api<IDictionaryResponse<ISliderMarathon>>('dictionary/Слайдеры', {
          method: 'GET',
        });
        console.log('ready');
        const promises = res.items.data.map(slider => {
          console.log('slider.pictures[0]', slider.pictures[0]);
          if (slider.pictures[0]) {
            return api(slider.pictures[0].path.replace('task/', ''), { method: 'GET' });
          }
        });
        const pictures = await Promise.all(promises);
        console.log('pictures', pictures);
        this.sliderMarathons = res.items.data;
        this.sliderLoading = false;
        return res.items.data;
      } catch (e) {
        this.sliderLoading = false;
        console.error('error', e);
      }
    },

    async fetchMarathons() {
      const api = useApi();
      try {
        this.mainLoading = true;
        const res = await api<IDictionaryResponse<IMarathon>>('dictionary/Марафоны?per_page=12', {
          method: 'GET',
        });
        console.log('res', res);
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
