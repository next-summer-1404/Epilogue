export interface RegisterRequest {
  email: string;
}

export interface RegisterRequest2 {
  tempUserId: string;
  verificationCode: string;
}

export interface RegisterRequest3 {
  userId: string;
  password: string;
  phoneNumber: string;
}
