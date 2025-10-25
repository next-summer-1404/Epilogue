import axiosInstance from "@/core/services/interceptors"
import { VerifyEmailResponse, VerifyEmail } from "./register.types"


export const verifyEmail = async (data : VerifyEmail): Promise<VerifyEmailResponse> => {
    console.log('dataaa register', data)
    try{
        const res = await axiosInstance.post('/api/auth/verify-email', data)
        return res.data
    }catch (error) {
        console.error('registerApi error:', error);
        throw error;
    }
  
}

