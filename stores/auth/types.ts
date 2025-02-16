export interface IAuthStore {
  otpLoading: boolean;
  verifyError: null | string;
  token: null | string;
  user: null | IUser;
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
  name: string;
  surname: string;
  isRegistered: boolean;
  birthday: string;
  sex: 'male' | 'female';
  phone: string;
  bloodGroup: string;
  citizenship: string;
  address: string;
  shirtSize: string;
  runningClub: string;
  emergencyContact: {
    name: string;
    whoIs: string;
    phone: string;
  };
}
