export interface LoginResponse {
  access_token: string;
}

export interface LocalStorageObject {
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}
