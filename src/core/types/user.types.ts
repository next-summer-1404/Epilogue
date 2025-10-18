export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export type UserRole = 'admin' | 'user' ;