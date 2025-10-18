import axiosInstance from "@/core/services/interceptors"
import { RegisterRequest3 } from "./register.types"


export const registerApi = async (data : RegisterRequest3) => {
    const res = await axiosInstance.post('/auth/register')
    return res.data
}