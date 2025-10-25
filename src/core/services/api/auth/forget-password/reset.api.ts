import axiosInstance from "@/core/services/interceptors"
import { ResetRequest, ResetResponse } from "./forgetPass.type";

export const resetApi  = async (data: ResetRequest): Promise<ResetResponse> => {
  console.log('verify data', data)
  try {
    const res = await axiosInstance.post('/api/auth/forgot-password/reset', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};