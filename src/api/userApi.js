// src/api/userApi.js
import apiClient from "./apiClient";

const userApi = {
  getProfile: () => apiClient.get("/users/profile"),
  updateProfile: (data) => apiClient.put("/users/profile", data),
  deleteAccount: () => apiClient.delete("/users/delete"),
};

export default userApi;
