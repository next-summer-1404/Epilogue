import axiosInstance from "@/core/services/interceptors"
import { CompleteRegistrationRequest, CompleteRegistrationResponse } from "./register.types"


export const CompleteApi = async (data : CompleteRegistrationRequest): Promise<CompleteRegistrationResponse> => {
    try{
        const res = await axiosInstance.post('/api/auth/complete-registration', data)
        return res.data
    }catch (error) {
        console.error('registerApi error:', error)
        throw error;
    }
  
}