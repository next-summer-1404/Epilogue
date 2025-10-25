export interface RegisterRequest {
  email: string;
}

export interface RegisterResponse {
  tempUserId: string;
  message: string;
}


export interface VerifyEmail {
  tempUserId: string;
  verificationCode: string;
}

export interface VerifyEmailResponse {
  message: string;
}


export interface CompleteRegistrationRequest {
  userId: string;
  password: string;
  phoneNumber: string;
}

export interface CompleteRegistrationResponse {
  message: string;
}

