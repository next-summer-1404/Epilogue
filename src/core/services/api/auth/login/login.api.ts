import axiosInstance from '@/core/services/interceptors'
import { LoginRequest, LoginResponse } from './login.types';

export const loginApi = async (data: LoginRequest): Promise<LoginResponse | string> => {
  console.log( 'dataaaaaa', data)
  try {
    const res = await axiosInstance.post('/auth/login', data);
    if (res.data && res.data.accessToken && res.data.refreshToken) {
      return res.data;
    } else {
      return 'خطای ورود، لطفا دوباره تلاش کنید';
    }
  } catch (error) {
    console.error(error);
    return 'خطای سرور';
  }
};




