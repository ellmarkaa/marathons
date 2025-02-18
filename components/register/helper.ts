import * as yup from 'yup';
import { REQUIRED_ERROR } from '~/utils/const';
import type { CalendarDate } from '@internationalized/date';
// ObjectSchema<IUserOptions>

export type RegisterFormType = {
  name: string;
  surname: string;
  birthday: null | CalendarDate;
  expirationPassportDate: null | CalendarDate;
  sex: 'male' | 'female' | '';
  phone: string;
  bloodGroupId: number | null;
  address: string | null;
  shirtSize: string;
  runningClub: string | null;
  citizenshipId: number | null;
  postCodeId: null | number;
  iin: string;
  passportNumber: string;

  emergencyName: string;
  emergencyWhoIs: string;
  emergencyPhone: string;
  emergencyPostCodeId: number | null;
};

const onlyNumberReg = /^\d+$/;

export const registerSchema = yup.object<RegisterFormType>({
  name: yup.string().required(REQUIRED_ERROR),
  surname: yup.string().required(REQUIRED_ERROR),
  birthday: yup.date().max(new Date(), 'Ограничение по дате').required(REQUIRED_ERROR),
  sex: yup.string().oneOf(['male', 'female'], REQUIRED_ERROR).required(REQUIRED_ERROR),
  phone: yup.string().matches(onlyNumberReg, 'Не правильный формат').required(REQUIRED_ERROR),
  bloodGroupId: yup.number().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
  address: yup.string().notRequired().nullable(),
  shirtSize: yup.string().required(REQUIRED_ERROR),
  runningClub: yup.string().nullable().notRequired(),
  citizenshipId: yup.number().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  postCodeId: yup.number().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  iin: yup.string().required(REQUIRED_ERROR).typeError(REQUIRED_ERROR),
  passportNumber: yup.string().required(REQUIRED_ERROR),
  expirationPassportDate: yup
    .date()
    .max(new Date(), 'Ограничение по дате')
    .typeError(REQUIRED_ERROR)
    .required(REQUIRED_ERROR),

  emergencyName: yup.string().required(REQUIRED_ERROR),
  emergencyWhoIs: yup.string().required(REQUIRED_ERROR),
  emergencyPhone: yup.string().matches(onlyNumberReg, 'Не правильный формат').required(REQUIRED_ERROR),
  emergencyPostCodeId: yup.number().typeError(REQUIRED_ERROR).required(REQUIRED_ERROR),
});

export const initialRegisterState: RegisterFormType = {
  address: null,
  birthday: null,
  bloodGroupId: null,
  citizenshipId: null,
  emergencyName: '',
  emergencyPhone: '',
  emergencyPostCodeId: null,
  emergencyWhoIs: '',
  name: '',
  phone: '',
  runningClub: '',
  sex: '',
  shirtSize: '',
  surname: '',
  postCodeId: null,
  iin: '',
  passportNumber: '',
  expirationPassportDate: null,
};
