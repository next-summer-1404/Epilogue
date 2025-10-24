import axiosInstance from '@/core/services/interceptors'
import { LoginRequest, LoginResponse } from './login.types';


export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    const res = await axiosInstance.post('/api/auth/login', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};






