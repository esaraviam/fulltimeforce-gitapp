import axios from "axios";

const apiClient = () => {
  const instance = axios.create({
    baseURL: process.env.API_URL,
    responseType: "json",
  });

  return instance;
};

export default apiClient;
