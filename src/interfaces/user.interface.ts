export interface User {
  id: number;
  email: string;
  username: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserQueryParams {
  loginAfterCreate: boolean;
}
