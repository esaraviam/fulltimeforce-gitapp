import axios from "axios";

const apiClient = () => {
  const instance = axios.create({
    baseURL: "http://localhost:3001/api",
    responseType: "json",
  });

  return instance;
};

export default apiClient;
