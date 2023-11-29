import axios from 'axios';
const API_BASE_URL = 'YOUR_API_BASE_URL';
export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data; 
  } catch (error) {
    throw error.response.data || 'Something went wrong';
  }
};