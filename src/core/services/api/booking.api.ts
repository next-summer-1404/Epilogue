import axiosInstance from "../interceptors";


export const bookingApi = async (id: string) => {
  try {
    const res = await axiosInstance.post(`/api/bookings/${id}`)
    return res.data
  } catch (error) {
    console.error('Booking API Error:', error)
    throw error
  }
}
