import type { CalendarDate } from '@internationalized/date';
import { CitizenValue } from '~/stores/auth/utils';
// ObjectSchema<IUserOptions>

export type RegisterFormType = {
  'name': string;
  'surname': string;
  'birthdate': null | CalendarDate;
  'passport_validity_period': null | CalendarDate;
  'passport_date_issue': null | CalendarDate;
  'gender': 'male' | 'female' | '';
  'phone': string;
  'country_phone_code': string;
  'bloodGroupId': number | null;
  't-shirt_size': string;
  'running_club': string | null;
  'citizenship': CitizenValue;
  'IIN': string;
  'passport_number': string;
  'passport_issuer': string;
  'passport_series': string;
  'passport_name': string;
  'passport_surname': string;

  'residence_country': string;
  'residence_city': string;
  'residence_address': string;
  'residence_apartment': string;
  'postal_code': string;

  'emergency_contact_name': string;
  'emergency_contact_role': string;
  'emergency_contact_phone': string;
  'emergency_contact_phone_code': string;
};

export const initialRegisterState: RegisterFormType = {
  'residence_address': '',
  'birthdate': null,
  'bloodGroupId': null,
  'citizenship': CitizenValue.Kazakhstan,
  'emergency_contact_name': '',
  'emergency_contact_phone': '',
  'emergency_contact_role': '',
  'name': '',
  'phone': '',
  'running_club': '',
  'gender': '',
  't-shirt_size': '',
  'surname': '',
  'IIN': '',
  'passport_number': '',
  'passport_validity_period': null,
  'passport_date_issue': null,
  'passport_issuer': '',
  'passport_series': '',
  'country_phone_code': '+997',
  'emergency_contact_phone_code': '+997',
  'passport_name': '',
  'passport_surname': '',
  'residence_city': '',
  'residence_country': '',
  'postal_code': '',
  'residence_apartment': '',
};
