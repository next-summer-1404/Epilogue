import { ContactUsRequest, ContactUsResponse } from "@/app/(main)/contactUs.types";
import axiosInstance from "../interceptors";


export const contactUsApi = async (data : ContactUsRequest): Promise<ContactUsResponse>=> {
    // console.log('data', data)
    try{
            const res = await axiosInstance.post('/api/contact-us', data)
    return res.data
    }catch (error) {
        console.error(error)
        throw error
    }

}