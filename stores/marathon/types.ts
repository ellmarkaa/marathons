import type {
  ICitizenship,
  IIncludeItem,
  IMarathonCity,
  IMarathonCountry,
  IPicture,
  ISlot,
  ITag,
  IVisa,
} from '~/utils/types';

export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
  mainPageMarathons: IMarathon[];
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
}

export interface IMarathon {
  contact_id: null;
  tag: ITag;
  city: IMarathonCity;
  visa: IVisa;
  slots: ISlot[];
  hotels: {
    scalar: '';
  };
  country: IMarathonCountry;
  currency: {
    scalar: '';
  };
  pictures: IPicture[];
  title_en: string;
  title_kz: string;
  title_ru: string;
  marathons: {
    scalar: '';
  };
  slot_count: number;
  marathon_date: string;
  description_en: string;
  description_kz: string;
  description_ru: string;
  included_items: IIncludeItem[];
  is_visa_required: boolean;
  is_hotel_required: boolean;
  marathon_deadline: string;
  allowed_citizenships: ICitizenship[];
  is_reminder_required: boolean;
}
