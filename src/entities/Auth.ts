export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: Auth;
}

export interface Auth {
  auth_token: string
}