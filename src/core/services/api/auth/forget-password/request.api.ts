import axiosInstance from "@/core/services/interceptors"
import { ForgetPassRequest, ForgetPassResponse } from "./forgetPass.type";


export const requestResetApi  = async (data: ForgetPassRequest): Promise<ForgetPassResponse> => {
  try {
    const res = await axiosInstance.post('/api/auth/forgot-password/request', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

