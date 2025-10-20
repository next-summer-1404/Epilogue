import axiosInstance from "@/core/services/interceptors"
import { RegisterRequest } from "./register.types"

export const registerApi = async (data: RegisterRequest) => {
  try {
    const res = await axiosInstance.post('api/auth/register', data);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
