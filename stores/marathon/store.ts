import type { IMarathonState, ISliderMarathon } from '~/stores/marathon/types';
import type { IDictionaryResponse } from '~/utils/types';

export const useMarathonStore = defineStore('marathon', {
  state: (): IMarathonState => ({
    sliderMarathons: [],
    mainPageMarathons: [],
  }),
  actions: {
    async fetchSliderMarathons() {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<ISliderMarathon>>('dictionary/Слайдеры', {
          method: 'GET',
        });
        this.sliderMarathons = res.items;
        return res.items;
      } catch (e) {
        console.error('error', e);
      }
    },

    async fetchMarathons() {
      const api = useApi();
      try {
        const res = await api<IDictionaryResponse<IMarathon>>('dictionary/Марафоны', {
          method: 'GET',
        });
        this.mainPageMarathons = res.items;
        return res.items;
      } catch (e) {
        console.error('error', e);
      }
    },
  },
});
