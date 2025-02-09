export interface IMarathonState {
  sliderMarathons: ISliderMarathon[];
}

export interface IField {
  key: string;
  type: string;
  title: string;
}

export interface ISliderMarathon {
  'id': number;
  'contact_id': null;
  'country': {
    scalar: '';
  };
  'end_date': string;
  'pictures': {
    scalar: '';
  };
  'title.en': string;
  'title.kz': string;
  'title.ru': string;
  'start_date': string;
  'marathon_url': string;
  'marathon_date': string;
}

export interface ISliderResponse {
  dictionary: {
    'id': number;
    'project_id': number;
    'user_id': null;
    'source': 'dictionary';
    'x-data-type': 'list';
    'utm': [];
    'Name': string;
    'fields': {
      'country': IField;
      'end_date': IField;
      'pictures': IField;
      'title.en': IField;
      'title.kz': IField;
      'title.ru': IField;
      'start_date': IField;
      'marathon_url': IField;
      'marathon_date': IField;
    };
    'role': [];
    'created_at': '2024-12-24 20:37';
    'updated_at': '2024-12-24 20:37';
  };
  items: ISliderMarathon[];
}

export interface IOtpResponse {
  data: [];
  message: string;
  status: number;
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

export interface IMarathon {
  id: number;
  contact_id: null;
  city: IMarathonCity;
  tags: {
    '0': {
      v: 1;
    };
  };
  hotels: {
    '0': {
      v: 1;
    };
  };
  country: IMarathonCountry;
  currency: {
    v: 1;
  };
  pictures: {
    scalar: '';
  };
  title_en: string;
  title_kz: string;
  title_ru: string;
  marathons: {
    '0': {
      type: '21';
      price: 10000;
    };
    '1': {
      type: '42';
      price: 20000;
    };
  };
  slot_count: 100;
  marathon_date: '2025-02-10T12:11:00.000Z';
  description_en: 'Фывфыв 456';
  description_kz: 'Фывфыв 789';
  description_ru: 'Фывфыв 123';
  included_items: {
    '0': {
      id: 28;
      name_en: 'Медаль финишера (англ)';
      name_kz: 'Медаль финишера (кз)';
      name_ru: 'Медаль финишера (ру)';
      contact_id: null;
    };
    '1': {
      id: 29;
      name_en: 'Футболка финишера (англ)';
      name_kz: 'Футболка финишера (кз)';
      name_ru: 'Футболка финишера (ру)';
      contact_id: null;
    };
    '2': {
      id: 30;
      name_en: 'Денежный приз (за первое место, англ)';
      name_kz: 'Денежный приз (за первое место, кз)';
      name_ru: 'Денежный приз (за первое местоб ру)';
      contact_id: null;
    };
    '3': {
      id: 31;
      name_en: 'Вход на марафон (англ)';
      name_kz: 'Вход на марафон (кз)';
      name_ru: 'Вход на марафон (ру)';
      contact_id: null;
    };
  };
  is_visa_required: true;
  is_hotel_required: true;
  is_reminder_required: true;
  prohibited_citizenships: {
    '0': {
      id: 38;
      iso: null;
      name_en: 'ОАЭ';
      name_kz: 'ОАЭ';
      name_ru: 'ОАЭ';
      contact_id: null;
      phone_code: 0;
    };
  };
}

export interface IMarathonResponse {
  dictionary: {
    'id': 65;
    'project_id': 1;
    'user_id': null;
    'source': 'dictionary';
    'x-data-type': 'list';
    'utm': [];
    'Name': 'Марафоны';
    'fields': {
      city: IField;
      tags: IField;
      hotels: IField;
      country: IField;
      currency: IField;
      pictures: IField;
      title_en: IField;
      title_kz: IField;
      title_ru: IField;
      marathons: IField;
      slot_count: IField;
      marathon_date: IField;
      description_en: IField;
      description_kz: IField;
      description_ru: IField;
      included_items: IField;
      is_visa_required: IField;
      is_hotel_required: IField;
      is_reminder_required: IField;
      prohibited_citizenships: IField;
    };
    'role': [];
    'created_at': '2025-02-03 17:07';
    'updated_at': '2025-02-03 17:07';
  };
  items: [
    {
      id: 67;
      contact_id: null;
      city: {
        id: 62;
        country: {
          id: 39;
          iso: null;
          name_en: 'Италия';
          name_kz: 'Италия';
          name_ru: 'Италия';
          contact_id: null;
          phone_code: 0;
        };
        name_en: null;
        name_kz: null;
        name_ru: 'Рим';
        contact_id: null;
      };
      tags: {
        '0': {
          v: 1;
        };
      };
      hotels: {
        '0': {
          v: 1;
        };
      };
      country: {
        id: 39;
        iso: null;
        name_en: 'Италия';
        name_kz: 'Италия';
        name_ru: 'Италия';
        contact_id: null;
        phone_code: 0;
      };
      currency: {
        v: 1;
      };
      pictures: {
        scalar: '';
      };
      title_en: 'Фыв 2';
      title_kz: 'Фвы 3';
      title_ru: 'Фыв 1';
      marathons: {
        '0': {
          type: '21';
          price: 10000;
        };
        '1': {
          type: '42';
          price: 20000;
        };
      };
      slot_count: 100;
      marathon_date: '2025-02-10T12:11:00.000Z';
      description_en: 'Фывфыв 456';
      description_kz: 'Фывфыв 789';
      description_ru: 'Фывфыв 123';
      included_items: {
        '0': {
          id: 28;
          name_en: 'Медаль финишера (англ)';
          name_kz: 'Медаль финишера (кз)';
          name_ru: 'Медаль финишера (ру)';
          contact_id: null;
        };
        '1': {
          id: 29;
          name_en: 'Футболка финишера (англ)';
          name_kz: 'Футболка финишера (кз)';
          name_ru: 'Футболка финишера (ру)';
          contact_id: null;
        };
        '2': {
          id: 30;
          name_en: 'Денежный приз (за первое место, англ)';
          name_kz: 'Денежный приз (за первое место, кз)';
          name_ru: 'Денежный приз (за первое местоб ру)';
          contact_id: null;
        };
        '3': {
          id: 31;
          name_en: 'Вход на марафон (англ)';
          name_kz: 'Вход на марафон (кз)';
          name_ru: 'Вход на марафон (ру)';
          contact_id: null;
        };
      };
      is_visa_required: true;
      is_hotel_required: true;
      is_reminder_required: true;
      prohibited_citizenships: {
        '0': {
          id: 38;
          iso: null;
          name_en: 'ОАЭ';
          name_kz: 'ОАЭ';
          name_ru: 'ОАЭ';
          contact_id: null;
          phone_code: 0;
        };
      };
    },
  ];
}
