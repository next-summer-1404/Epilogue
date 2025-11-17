import { HouseRequest } from "@/core/types/houses.type";
import axiosInstance from "../../interceptors";

export const housesApi = async (params?: HouseRequest) => {
  try {
    const res = await axiosInstance.get("/api/houses", {
      params: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        // transactionType: `[${(params?.transactionType || ["rental", "mortgage"]).join(", ")}]`,
        transactionType: params?.transactionType || ["rental", "mortgage"],

        search: params?.search || "",
        order: params?.order || "DESC",
        sort: params?.sort || "last_updated",
        propertyType: params?.propertyType || "villa",
        location: params?.location || "",
        minPrice: params?.minPrice,
        maxPrice: params?.maxPrice,
        minRent: params?.minRent,
        maxRent: params?.maxRent,
        minMortgage: params?.minMortgage,
        maxMortgage: params?.maxMortgage,
        minArea: params?.minArea,
        maxArea: params?.maxArea,
      },
    });
    return res.data;
  } catch (error) {
    console.error("housesApi error:", error);
    throw error;
  }
};
