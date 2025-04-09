export interface IAuthStore {
  otpLoading: boolean;
  verifyError: null | string;
  token: null | string;
  user: null | IUser;
  userUpdateLoading: boolean;
}

export type VerifyParams = {
  email: string;
  code: number;
};

export interface IUser {
  vendor: 'client';
  value: string; // email
  options: Partial<IUserOptions>;
  created_at: string;
  updated_at: string;
}

export interface IUserOptions {
  'name': string;
  'surname': string;
  'birthdate': string;
  'passport_validity_period': string;
  'passport_date_issue': string;
  'gender': 'male' | 'female';
  'phone': string;
  'country_phone_code': string;
  'bloodGroupId': number;
  't-shirt_size': string;
  'running_club': string | null;
  'citizenship': CitizenValue;
  'IIN': string | null;
  'passport_number': string;
  'passport_issuer': string;
  'passport_series': string | null;
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

  'is_registered': boolean;
  // TODO: favorite
}

export interface IOtpResponse {
  data: [];
  message: string;
  status: number;
}
