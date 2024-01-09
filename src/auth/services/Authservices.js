import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:3001';

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/`, userData);
    return response.data; 
  } catch (error) {
    throw error.response.data || 'Something went wrong';
  }
};
export const logInUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, userData);
    return response.data; 
  } catch (error) {
    throw error.response.data || 'Something went wrong';
  }
};



