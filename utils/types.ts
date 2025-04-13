import type { CSSProperties } from 'vue';

export type ButtonTypes = 'filled' | 'outlined' | 'tonal';

export interface ICommonItem {
  label: string;
  value: any;
}

export interface IDropdownItems {
  label: string;
  value: any;
}

export type ClassProp = string | string[] | Record<string, boolean>;

export type IconPropsType = {
  class?: ClassProp;
  style?: CSSProperties;
  width?: number;
  height?: number;
};

export interface ITag {
  id: number;
  Name: 'Announcement';
  contact_id: null;
}

export interface IField {
  key: string;
  type: string;
  title: string;
}

export interface IDictionaryResponse<T> {
  dictionary: {
    'x-data-type': 'list';
    'utm': [];
    'Name': 'Марафоны';
    'fields': Record<keyof T, IField>;
    'created_at': string;
    'updated_at': string;
  };
  items: {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: ILink[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
  };
}

export interface ILink {
  url: null;
  label: '&laquo; Previous';
  active: false;
}

export interface IMarathonCity {
  id: number;
  country: IMarathonCountry;
  name_en: null;
  name_kz: null;
  name_ru: string;
  contact_id: null;
}

export interface IMarathonCountry {
  id: number;
  iso: null | string;
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

export interface ICurrency {
  id: 173;
  Name: null;
  symbol: 'AMD';
  contact_id: null;
  extra_charge: 7;
  exchange_rate: null;
}

export interface IViseService {
  price: 100;
  currency: ICurrency;
}

export interface IVisa {
  id: 182;
  name_en: 'Belgium';
  name_kz: 'Белгия';
  name_ru: 'Белгия';
  service: IViseService;
  contact_id: null;
  consular_fees: {
    price: 50;
    currency: ICurrency;
  };
}

export interface ISlot {
  price: number;
  currency: ICurrency;
  distance: number;
  slot_count: number;
}

export interface IPicture {
  date: string;
  name: string;
  path: string;
  size: number;
}

export interface IProfileMenu {
  label: string;
  icon: string;
  isActive: boolean;
  name: 'profile' | 'orders' | 'history' | 'favorite';
}
