export type IAuthState = {
  loading: boolean;
  error: string;
  token: string;
};

export interface ISignInRep {
  email: string;
  password: string;
  callback: () => void;
}

export interface ISignUpRep {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  callback: () => void;
}
