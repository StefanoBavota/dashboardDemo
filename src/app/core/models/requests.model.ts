export interface BaseRequest {
  skip?: number;
  take?: number;
}

export interface PaymentRequest extends BaseRequest {
  search?: string;
  active?: boolean;
  client?: string;
  area?: string;
  society?: string;
}

export interface ClientRequest extends BaseRequest {
  search?: string;
  bornDate?: number;
  cardYear?: number;
  active?: boolean;
}

export interface AreaRequest extends BaseRequest {
  name?: string;
  description?: string;
}

export interface UserRequest extends BaseRequest {
  search?: string;
  role?: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
