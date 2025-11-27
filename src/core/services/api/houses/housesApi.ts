import { HouseRequest } from "@/core/types/houses.type";
import axiosInstance from "../../interceptors";

export const housesApi = async (params?: HouseRequest) => {
  try {
    const requestParams: any = {
      page: params?.page || 1,
      limit: params?.limit || 10,
      search: params?.search || "",
      order: params?.order || "DESC",
      sort: params?.sort || "last_updated",
      propertyType: params?.propertyType || "",
      location: params?.location || "",
      minPrice: params?.minPrice,
      maxPrice: params?.maxPrice,
      minRent: params?.minRent,
      maxRent: params?.maxRent,
      minMortgage: params?.minMortgage,
      maxMortgage: params?.maxMortgage,
      minArea: params?.minArea,
      maxArea: params?.maxArea,
    };

    if (params?.transactionType) {
      requestParams.transactionType = Array.isArray(params.transactionType)
        ? params.transactionType.join(",")
        : params.transactionType;
    } else {
      requestParams.transactionType = "rental,mortgage";
    }

    const filteredParams: any = {};
    Object.keys(requestParams).forEach(key => {
      const value = requestParams[key];
      if (value !== undefined && value !== null && value !== "") {
        filteredParams[key] = value;
      }
    });

    const res = await axiosInstance.get("/api/houses", {
      params: filteredParams
    });
    
    return res.data;
  } catch (error) {
    console.error("housesApi error:", error);
    throw error;
  }
};