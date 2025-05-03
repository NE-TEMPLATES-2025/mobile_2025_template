import { apiClient } from "./apiClient";

const signup = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const response = await apiClient.post("/auth/register",{
      firstName,
      lastName,
      email,
      password
    });

    return {
      statusText: "success",
      data: response.data
    };

  } catch (error: any) {
    console.error("Signup error:", error?.response?.data || error.message);
    return {
      statusText: "error",
      error: error?.response?.data || error.message
    };
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("/auth/login", { email, password });

    return {
      statusText: "success",
      data: response.data
    };

  } catch (error: any) {
    console.error("Login error:", error?.response?.data || error.message);
    return {
      statusText: "error",
      error: error?.response?.data || error.message
    };
  }
};

export default {
  signup,
  login
};
