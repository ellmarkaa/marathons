export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
  mainPageMarathons: IMarathon[];
}

export interface IPicture {
  date: '2025-02-19 14:32';
  name: 'фыв.jpg';
  path: 'task/file/114026bc-4474-48b2-8da3-fb0f53f42d56.jpg';
  size: 287865;
}

export interface ISliderMarathon {
  'id': number;
  'contact_id': null;
  'country': {
    scalar: '';
  };
  'end_date': string;
  'pictures': IPicture[];
  'title.en': string;
  'title.kz': string;
  'title.ru': string;
  'start_date': string;
  'marathon_url': string;
  'marathon_date': string;
}

export interface IMarathonCity {
  id: number;
  country: IMarathonCity;
  name_en: null;
  name_kz: null;
  name_ru: string;
  contact_id: null;
}

export interface IMarathonCountry {
  id: number;
  iso: null;
  name_en: string;
  name_kz: string;
  name_ru: string;
  contact_id: null;
  phone_code: number;
}

export interface IIncludeItem {
  id: number;
  name_en: string;
  name_kz: string;
  name_ru: string;
  contact_id: null;
}

export interface IMarathon {
  id: number;
  contact_id: null;
  city: IMarathonCity;
  tags: {
    v: 1;
  };
  country: IMarathonCountry;
  currency: {
    scalar: '';
  };
  pictures: object;
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
  is_reminder_required: boolean;
  prohibited_citizenships: {
    scalar: '';
  };
}
