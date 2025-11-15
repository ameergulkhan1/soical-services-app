// src/api/otpApi.js
import apiClient from "./apiClient";

const otpApi = {
  sendOtp: (data) => apiClient.post("/auth/send-otp", data),
  verifyOtp: (data) => apiClient.post("/auth/verify-otp", data),
  resendOtp: (data) => apiClient.post("/auth/resend-otp", data),
};

export default otpApi;
