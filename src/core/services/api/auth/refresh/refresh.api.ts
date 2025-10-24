import axiosInstance from "@/core/services/interceptors"
import { RefreshRequest, RefreshResponse } from "./refresh.type"

export const refreshApi = async (data: RefreshRequest): Promise<RefreshResponse> => {
    try{
        const res = await axiosInstance.post('/api/auth/refresh',data)
        return res.data

    }catch (error){
        console.error('refresh error:', error)
         throw error
    }
}