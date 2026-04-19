import {UserResponse} from "../services/auth.service";

export interface AuthResponse {
  token: string;
  user: UserResponse;
}
