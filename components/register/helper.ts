import * as yup from 'yup';
import type { CalendarDate } from '@internationalized/date';
import { CitizenValue } from '~/stores/auth/utils';
import { ONLY_NUMBER_REG } from '~/utils/const';
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

export const registerSchema = yup.object<RegisterFormType>({
  'name': yup.string().required(REQUIRED_ERROR),
  'surname': yup.string().required(REQUIRED_ERROR),
  'birthdate': yup.date().max(new Date(), 'Ограничение по дате').required(REQUIRED_ERROR),
  'gender': yup.string().oneOf(['male', 'female'], REQUIRED_ERROR).required(REQUIRED_ERROR),
  'phone': yup.string().matches(ONLY_NUMBER_REG, 'Не правильный формат').required(REQUIRED_ERROR),
  'country_phone_code': yup.string().required(REQUIRED_ERROR),
  'bloodGroupId': yup.number().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  'residence_address': yup.string().required(REQUIRED_ERROR),
  't-shirt_size': yup.string().required(REQUIRED_ERROR),
  'running_club': yup.string().nullable().notRequired(),
  'citizenship': yup.string().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  'IIN': yup.string().when('citizenship', {
    is: CitizenValue.Kazakhstan,
    then: schema => schema.typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
    otherwise: schema => schema.nullable().notRequired(),
  }),
  'passport_number': yup.string().required(REQUIRED_ERROR),
  'passport_issuer': yup.string().required(REQUIRED_ERROR),
  // TODO: условие
  'passport_series': yup.string().when('citizenship', {
    is: CitizenValue.Kazakhstan,
    then: schema => schema.nullable().notRequired(),
    otherwise: schema => schema.typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  }),
  'passport_validity_period': yup.date().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  'passport_date_issue': yup
    .date()
    .max(new Date(), 'Ограничение по дате')
    .typeError(REQUIRED_ERROR)
    .required(REQUIRED_ERROR),

  'emergency_contact_name': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_role': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_phone': yup.string().matches(ONLY_NUMBER_REG, 'Не правильный формат').required(REQUIRED_ERROR),
  'emergency_contact_phone_code': yup.string().required(REQUIRED_ERROR),
  'passport_name': yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Только латинские буквы')
    .required(REQUIRED_ERROR),
  'passport_surname': yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Только латинские буквы')
    .required(REQUIRED_ERROR),
  'residence_city': yup.string().required(REQUIRED_ERROR),
  'residence_country': yup.string().required(REQUIRED_ERROR),
  'postal_code': yup.string().required(REQUIRED_ERROR),
  'residence_apartment': yup.string().required(REQUIRED_ERROR),
});

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
