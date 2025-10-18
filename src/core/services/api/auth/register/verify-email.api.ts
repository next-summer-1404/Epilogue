import axiosInstance from "@/core/services/interceptors"
import { RegisterRequest2 } from "./register.types"


export const registerApi = async (data : RegisterRequest2) => {
    const res = await axiosInstance.post('/auth/verify-email')
    return res.data
}