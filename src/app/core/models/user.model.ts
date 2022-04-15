export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface LoggedUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: string;
}

export interface NewUser extends User {
  password: string;
  confirmPassword?: string;
}
