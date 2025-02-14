import axios from "axios";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net";

export const apiServices = {
  get: async (endpoint: string, id: string) => {
    const response = await axios.get(`${BASE_URL}${endpoint}${id}`);
    return response.data;
  },
  post: async <T>(endpoint: string, body: T) => {
    const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  },
};
