import type { IMarathonState, ISliderResponse } from '~/stores/marathon/types';

export const useMarathonStore = defineStore('marathon', {
  state: (): IMarathonState => ({
    sliderMarathons: [],
  }),
  actions: {
    async fetchSliderMarathons() {
      const api = useApi();
      try {
        const res = await api<ISliderResponse>('dictionary/Слайдеры', {
          method: 'GET',
        });
        this.sliderMarathons = res.items;
        console.log('dictionary/Слайдеры', res);
        return res;
      } catch (e) {
        console.error('error', e);
      }
    },
  },
});
