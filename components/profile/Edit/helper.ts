import type { DateValue } from '@internationalized/date';

export type PersonalState = {
  name: string;
  surname: string;
  gender: 'male' | 'female';
  phone: string;
  country_phone_code: string;
  birthdate: DateValue;
  bloodGroupId: number;
};
