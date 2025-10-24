import axiosInstance from "@/core/services/interceptors"
import { VerifyRequest, VerifyResponse  } from "./forgetPass.type";

export const verifyApi  = async (data: VerifyRequest): Promise<VerifyResponse> => {
  console.log('verify data', data)
  try {
    const res = await axiosInstance.post('/api/auth/forgot-password/verify', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
