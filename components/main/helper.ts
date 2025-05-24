import * as yup from 'yup';

export type ConsultationForm = {
  name: string;
  comment: string;
  type: 'phone' | 'email';
  phone?: string | null;
  email?: string | null;
  country_phone_code: string | number;
};

export const initialConsultation: ConsultationForm = {
  country_phone_code: '+997',
  comment: '',
  name: '',
  type: 'phone',
  phone: null,
  email: null,
};

export const consultationSchema = yup.object({
  name: yup.string().required(REQUIRED_ERROR),
  comment: yup.string().required(REQUIRED_ERROR),
  type: yup.string().oneOf(['phone', 'email'], REQUIRED_ERROR).required(REQUIRED_ERROR),

  phone: yup.string().when('type', {
    is: 'phone',
    then: schema => schema.matches(ONLY_NUMBER_REG, 'Неверный формат телефона').required(REQUIRED_ERROR),
    otherwise: schema => schema.notRequired(),
  }),

  email: yup.string().when('type', {
    is: 'email',
    then: schema => schema.email('Неверный формат email').required(REQUIRED_ERROR),
    otherwise: schema => schema.notRequired(),
  }),
});
