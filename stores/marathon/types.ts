import type { IIncludeItem, IMarathonCity, IMarathonCountry, IPicture, ISlot, ITag, IVisa } from '~/utils/types';
import type { ICountry } from '~/stores/dictionary/types';

export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
  mainPageMarathons: IMarathon[];
  mainLoading: boolean;
  sliderLoading: boolean;
}

export interface ISliderMarathon {
  'contact_id': null;
  'marathon': IMarathon;
  'end_date': string;
  'pictures': IPicture[];
  'title.en': string;
  'title.kz': string;
  'title.ru': string;
  'start_date': string;
  'marathon_url': string;
  'marathon_date': string;
  'id': number;
}

export interface IMarathon {
  id: number;
  faq: {
    v: 1;
  };
  order: number;
  contact_id: null;
  tag: ITag;
  city: IMarathonCity;
  visa: IVisa;
  slots: ISlot[];
  country: IMarathonCountry;
  pictures: IPicture[];
  title_en: string;
  title_kz: string;
  title_ru: string;
  marathon_date: string;
  description_en: string;
  description_kz: string;
  description_ru: string;
  included_items: IIncludeItem[];
  is_visa_required: boolean;
  is_hotel_required: boolean;
  marathon_deadline: string;
  allowed_citizenships: ICountry[];
  is_reminder_required: boolean;
}
