export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  walletAddress: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  cpf?: string;
  walletAddress?: string;
}
