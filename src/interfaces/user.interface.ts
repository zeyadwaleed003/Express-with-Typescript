export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserQueryParams {
  loginAfterCreate: boolean;
}
