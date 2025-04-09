import type { DateValue } from '@internationalized/date';
import * as yup from 'yup';
import { CitizenValue } from '~/stores/auth/utils';
import { ONLY_NUMBER_REG } from '~/utils/const';

export type PersonalState = {
  name: string;
  surname: string;
  gender: 'male' | 'female';
  phone: string;
  country_phone_code: string;
  birthdate: DateValue;
  bloodGroupId: number;
};

export type PassportState = {
  passport_surname: string;
  passport_name: string;
  citizenship: CitizenValue;
  IIN: string | null;
  passport_series: string | null;
  passport_number: string;
  passport_issuer: string;
  passport_date_issue: DateValue;
  passport_validity_period: DateValue;
};

export type ResidenceState = {
  residence_country: string;
  residence_city: string;
  residence_address: string;
  residence_apartment: string;
  postal_code: string;
};

export type MoreInfoState = {
  't-shirt_size': string;
  'running_club': string | null;

  'emergency_contact_name': string;
  'emergency_contact_role': string;
  'emergency_contact_phone': string;
  'emergency_contact_phone_code': string;
};

export const personalValSchema = yup.object<PersonalState>({
  name: yup.string().required(REQUIRED_ERROR),
  surname: yup.string().required(REQUIRED_ERROR),
  birthdate: yup.date().max(new Date(), 'Ограничение по дате').required(REQUIRED_ERROR),
  gender: yup.string().oneOf(['male', 'female'], REQUIRED_ERROR).required(REQUIRED_ERROR),
  phone: yup.string().matches(ONLY_NUMBER_REG, 'Не правильный формат').required(REQUIRED_ERROR),
  country_phone_code: yup.string().required(REQUIRED_ERROR),
  bloodGroupId: yup.number().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
});

export const passportValSchema = yup.object<PassportState>({
  passport_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Только латинские буквы')
    .required(REQUIRED_ERROR),
  passport_surname: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Только латинские буквы')
    .required(REQUIRED_ERROR),
  citizenship: yup.string().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  IIN: yup.string().when('citizenship', {
    is: CitizenValue.Kazakhstan,
    then: schema => schema.typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
    otherwise: schema => schema.nullable().notRequired(),
  }),
  passport_number: yup.string().required(REQUIRED_ERROR),
  passport_issuer: yup.string().required(REQUIRED_ERROR),
  passport_series: yup.string().when('citizenship', {
    is: CitizenValue.Kazakhstan,
    then: schema => schema.nullable().notRequired(),
    otherwise: schema => schema.typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  }),
  passport_validity_period: yup.date().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  passport_date_issue: yup
    .date()
    .max(new Date(), 'Ограничение по дате')
    .typeError(REQUIRED_ERROR)
    .required(REQUIRED_ERROR),
});

export const residenceValSchema = yup.object<ResidenceState>({
  residence_city: yup.string().required(REQUIRED_ERROR),
  residence_country: yup.string().required(REQUIRED_ERROR),
  postal_code: yup.string().required(REQUIRED_ERROR),
  residence_apartment: yup.string().required(REQUIRED_ERROR),
  residence_address: yup.string().required(REQUIRED_ERROR),
});

export const moreValSchema = yup.object<MoreInfoState>({
  't-shirt_size': yup.string().required(REQUIRED_ERROR),
  'running_club': yup.string().nullable().notRequired(),

  'emergency_contact_name': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_role': yup.string().required(REQUIRED_ERROR),
  'emergency_contact_phone': yup.string().matches(ONLY_NUMBER_REG, 'Не правильный формат').required(REQUIRED_ERROR),
  'emergency_contact_phone_code': yup.string().required(REQUIRED_ERROR),
});
