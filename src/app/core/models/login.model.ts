export interface LoginResponse {
  token: string,
  admin: boolean,
  error: string
}

export interface LocalStorageObject {
  token: string,
  admin: boolean
}
