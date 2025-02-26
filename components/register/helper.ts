import * as yup from 'yup';
import { REQUIRED_ERROR } from '~/utils/const';
import type { CalendarDate } from '@internationalized/date';
// ObjectSchema<IUserOptions>

export type RegisterFormType = {
  'name': string;
  'surname': string;
  'birthdate': null | CalendarDate;
  'passport_validity_period': null | CalendarDate;
  'gender': 'male' | 'female' | '';
  'phone': string;
  'country_phone_code': string;
  'bloodGroupId': number | null;
  't-shirt_size': string;
  'running_club': string | null;
  'citizenshipId': number | null;
  'IIN': string;
  'passport_number': string;
  'passport_issuer': string;
  'passport_series': string;
  'residence_place': string | null;

  'emergency_contact_name': string;
  'emergency_contact_role': string;
  'emergency_contact_phone': string;
  'emergency_contact_phone_code': string;
};

const onlyNumberReg = /^\d+$/;

export const registerSchema = yup.object<RegisterFormType>({
  'name': yup.string().required(REQUIRED_ERROR),
  'surname': yup.string().required(REQUIRED_ERROR),
  'birthdate': yup.date().max(new Date(), 'Ограничение по дате').required(REQUIRED_ERROR),
  'gender': yup.string().oneOf(['male', 'female'], REQUIRED_ERROR).required(REQUIRED_ERROR),
  'phone': yup.string().matches(onlyNumberReg, 'Не правильный формат').required(REQUIRED_ERROR),
  'country_phone_code': yup.string().required(REQUIRED_ERROR),
  'bloodGroupId': yup.number().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  'residence_place': yup.string().notRequired().nullable(),
  't-shirt_size': yup.string().required(REQUIRED_ERROR),
  'running_club': yup.string().nullable().notRequired(),
  'citizenshipId': yup.number().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  'IIN': yup.string().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  'passport_number': yup.string().required(REQUIRED_ERROR),
  'passport_issuer': yup.string().required(REQUIRED_ERROR),
  'passport_series': yup.string().required(REQUIRED_ERROR),
  'passport_validity_period': yup
    .date()
    .max(new Date(), 'Ограничение по дате')
    .typeError(REQUIRED_ERROR)
    .required(REQUIRED_ERROR),

  'emergency_contact_name': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_role': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_phone': yup.string().matches(onlyNumberReg, 'Не правильный формат').required(REQUIRED_ERROR),
  'emergency_contact_phone_code': yup.string().required(REQUIRED_ERROR),
});

export const initialRegisterState: RegisterFormType = {
  'residence_place': null,
  'birthdate': null,
  'bloodGroupId': null,
  'citizenshipId': null,
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
  'passport_issuer': '',
  'passport_series': '',
  'country_phone_code': '+997',
  'emergency_contact_phone_code': '+997',
};
