export interface LoginResponse {
  token: string;
  admin: boolean;
  error: string;
}

export interface LocalStorageObject {
  token: string;
  admin: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}
