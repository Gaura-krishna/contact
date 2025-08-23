import API from "../config";

// Register
export const registerUser = (userData, navigate, toast) => async (dispatch) => {
  try {
    const { data } = await API.post("users/register", userData);
    toast.success("Registered successfully");
    navigate("/login");
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.error || "Registration failed!");
  }
};

// Login
export const loginUser = (userData, navigate, toast) => async (dispatch) => {
  try {
    const { data } = await API.post("users/login", userData);
    localStorage.setItem("token", data.token);
    toast.success("Login successful!");
    navigate("/");
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.error || "Login failed!");
  }
};



export const getLoginToken = () => {
  return localStorage.getItem("token");
};

