export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  status: string;
  role: string;
  createdAt?: string; // ISO date-time from backend
}
