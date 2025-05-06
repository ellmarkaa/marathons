import type {IDistance} from "~/stores/marathon/types";

export interface IDictionaryState {
  bloodTypes: IBloodType[];
  dictionaryLoading: boolean;
  error: null | string;
  citizenshipList: ICitizenship[];
  countryList: ICountry[];
  distances: IDistance[]
}

export interface IBloodType {
  id: number;
  contact_id: null;
  Name: string;
}

export interface ICitizenship {
  id: number;
  contact_id: null;
  country: ICountry;
}

export interface ICountry {
  id: number;
  iso: string;
  name_en: string;
  name_kz: string;
  name_ru: string;
  contact_id: null;
  phone_code: number;
}
