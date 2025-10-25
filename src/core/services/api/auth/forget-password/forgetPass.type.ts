export interface ForgetPassRequest {
  email: string;
}
export interface ForgetPassResponse {
  message: string;
}


export interface VerifyRequest {
  email: string;
  resetCode: string;
}
export interface VerifyResponse {
  message: string;
}


export interface ResetRequest {
  email: string;
  resetCode: string;
  newPassword: string;
}
export interface ResetResponse {
  message: string;
}