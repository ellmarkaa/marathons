import type {
  HTMLstring,
  ICurrency,
  IIncludeItem,
  IMarathonCity,
  IMarathonCountry,
  IPicture,
  ISlot,
  ITag,
  IVisa,
} from '~/utils/types';
import type { ICountry } from '~/stores/dictionary/types';

export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
  mainPageMarathons: IMarathon[];
  mainLoading: boolean;
  sliderLoading: boolean;
  marathonPagination: {
    perPage: number;
    total: number;
    lastPage: number;
    page: number;
  };
}

export type FetchMarathonsParams = {
  year?: number | string;
  distance?: number | string;
};

export interface ISliderMarathon {
  contact_id: null;
  marathon: IMarathon;
  end_date: string;
  order: number;
  pictures: IPicture[];
  start_date: string;
  marathon_url: string;
  marathon_date: string;
}

export interface IDistance {
  id?: number;
  distance: number;
  contact_id: null;
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
  distances: IDistance[];
}

export interface IPrice {
  id: number;
  contact_id: null;
  visa: IVisa;
  price: number;
  currency: ICurrency;
  distance: IDistance;
  marathon: IMarathon;
  total_count: number;
  hotel_number?: IHotelNumber;
  is_buy_required: true;
}

export interface IHotelNumber {
  id: number;
  hotel: IHotel;
  price: number;
  currency: {
    scalar: null;
  };
  contact_id: null;
  stay_dates: string[];
  night_count: number;
  number_count: number;
  placement_type: {
    id: number;
    name_en: string;
    name_kz: string;
    name_ru: string;
    contact_id: null;
  };
}

export interface IHotel {
  id: number;
  Name: string;
  city: {
    v: 1;
  };
  rating: number;
  country: ICountry;
  address_en: string;
  address_kz: string;
  address_ru: string;
  contact_id: null;
  booking_url: string;
  description: string;
  included_items: IIncludeItem[];
  name_for_site_en: string;
  name_for_site_kz: string;
  name_for_site_ru: string;
}

export interface IFAQ {
  id: number;
  contact_id: null;
  meta: {
    scalar: '';
  };
  title: string;
  marathon: IMarathon;
  profile_template: HTMLstring;
  marathon_auto_mailing: HTMLstring;
  marathon_manual_mailing: HTMLstring;
}

export interface IReview {
  id: number;
  contact_id: null;
  value: string;
  status: {
    key: string;
    color: string;
    title: string;
  };
  marathon: IMarathon;
  created_at: string;
  created_by: IUser;
}
