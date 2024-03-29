export interface BaseRequest {
  offset?: number;
  limit?: number;
}

export interface PaymentRequest extends BaseRequest {
  search?: string;
  client?: string;
  area?: string;
  date?: string;
}

export interface ClientRequest extends BaseRequest {
  search?: string;
  born?: number;
  cardYear?: number;
  active?: boolean;
}

export interface AreaRequest extends BaseRequest {
  search?: string,
}

export interface SocietyRequest extends BaseRequest {
  search?: string,
}

export interface UserRequest extends BaseRequest {
  search?: string;
  role?: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface EditProfileRequest {
  name: string;
  surname: string;
}
