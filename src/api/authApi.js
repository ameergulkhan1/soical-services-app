// src/api/authApi.js
import apiClient from "./apiClient";

const authApi = {
  signup: async (data) => {
    const response = await apiClient.post("/auth/signup", data);
    return response;
  },

  login: async (data) => {
    const response = await apiClient.post("/auth/login", data);
    return response;
  },

  forgotPassword: async (data) => {
    try {
      console.log('Sending forgot password request:', { email: data.email });
      const response = await apiClient.post("/auth/forgot-password", {
        email: data.email,
        type: 'RESET_PASSWORD' // Add the required type field
      });
      console.log('Forgot password response:', response.data);
      return response;
    } catch (error) {
      console.error('Forgot password error:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        data: error.response?.data
      });
      // Enhance error handling
      if (error.response?.status === 500) {
        throw new Error('Server error. Please try again later or contact support.');
      }
      throw error;
    }
  },

  resetPassword: async (data) => {
    try {
      if (!data.token) {
        throw new Error('Reset token is required');
      }
      
      const { token, ...passwordData } = data;
      console.log('Sending reset password request:', { token: token.substring(0, 10) + '...' });
      
      const response = await apiClient.post(`/auth/reset-password/${token}`, {
        password: passwordData.password // Ensure we're sending the password in the expected format
      });
      
      console.log('Reset password response:', response.data);
      return response;
    } catch (error) {
      console.error('Reset password error:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        data: error.response?.data
      });
      throw error;
    }
  },

  changePassword: async (data) => {
    const response = await apiClient.put("/auth/change-password", data);
    return response;
  },

  verifyEmail: async (token) => {
    const response = await apiClient.post(`/auth/verify-email/${token}`);
    return response;
  },
};

export default authApi;
